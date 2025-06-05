# Guia de Integra\u00e7\u00e3o MEI + Emissor Nacional de NFS-e

Este guia resume os passos b\u00e1sicos para criar um aplicativo React Native (Expo) que integra com o Emissor Nacional de Nota Fiscal de Servi\u00e7o eletr\u00f4nica (NFS-e). Ele inclui exemplos de c\u00f3digo e d\u00famas recomenda\u00e7\u00f5es para consulta de CNPJ, autentica\u00e7\u00e3o com Supabase e envio de NFS-e.

## 1. Cadastro por CNPJ

1. Pe\u00e7a o CNPJ do usu\u00e1rio (MEI).
2. Consulte uma API p\u00fablica, como [`brasilapi.com.br/api/cnpj/v1/{CNPJ}`](https://brasilapi.com.br/api/cnpj/v1/).
3. Preencha automaticamente dados de raz\u00e3o social, endere\u00e7o e telefone.
4. Exemplo de busca com Axios:
   ```js
   import axios from 'axios';
   async function buscarDadosCnpj(cnpj) {
     const { data } = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
     console.log(data.nome, data.logradouro);
   }
   ```

## 2. Autentica\u00e7\u00e3o e banco de dados com Supabase

1. Crie um projeto no Supabase e obtenha a `URL` e `anon key`.
2. Instale depend\u00eancias compat\u00edveis com React Native:
   ```bash
   npx expo install @supabase/supabase-js @react-native-async-storage/async-storage react-native-url-polyfill
   ```
3. Inicialize o cliente:
   ```js
   import 'react-native-url-polyfill/auto';
   import AsyncStorage from '@react-native-async-storage/async-storage';
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = 'https://<YOUR_SUPABASE_ID>.supabase.co';
   const supabaseAnonKey = '<YOUR_SUPABASE_ANON_KEY>';
   export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
     auth: { storage: AsyncStorage }
   });
   ```
4. Utilize `supabase.auth.signUp` para cadastrar e `supabase.from('empresas').insert` para gravar os dados do CNPJ.

## 3. Emiss\u00e3o da NFS-e

1. Pe\u00e7a o CNPJ do tomador e utilize a mesma API de CNPJ para preencher nome e endere\u00e7o automaticamente.
2. Monte o `payload` da NFS-e com dados do prestador e tomador.
3. Exemplo simplificado de `payload`:
   ```js
   const nfsePayload = {
     prestador: { cnpj: '12345678000190' },
     tomador: { cnpj: '11222333000100', razaoSocial: nomeTomador },
     descricao: 'Servi\u00e7o prestado',
     valorServico: 150.00
   };
   ```

## 4. Envio ao web service

### Certificado digital

Use um certificado A1 para autentica\u00e7\u00e3o m\u00fatua TLS. Exemplo com Axios em Node.js:
```js
import fs from 'fs';
import https from 'https';
import axios from 'axios';

const httpsAgent = new https.Agent({
  pfx: fs.readFileSync('certificado.p12'),
  passphrase: 'senha'
});

axios.post('https://api.nfse.gov.br/recepcao/rest/nfse', nfsePayload, { httpsAgent })
  .then(r => console.log(r.data))
  .catch(console.error);
```

### Login Gov.br

Como alternativa, registre o aplicativo no Gov.br e implemente o fluxo OAuth2 para obter um token `Bearer`. Envie o token no cabe\u00e7alho `Authorization` nas requisi\u00e7\u00f5es.

## 5. Armazenamento e refer\u00eancia

- Guarde as notas emitidas em tabelas no Supabase.
- Consulte a documenta\u00e7\u00e3o oficial da NFS-e para saber os campos obrigat\u00f3rios.

Este guia deve ajudar a iniciar a integra\u00e7\u00e3o de um aplicativo mobile com a NFS-e nacional.
