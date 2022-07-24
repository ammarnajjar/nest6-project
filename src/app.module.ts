import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoapModule, SoapModuleOptions } from 'nestjs-soap';

const SOAP_URI =
  'https://svn.apache.org/repos/asf/airavata/sandbox/xbaya-web/test/Calculator.wsdl';

@Module({
  imports: [
    SoapModule.forRootAsync({
      clientName: 'ClientName',
      useFactory: async (): Promise<SoapModuleOptions> => ({
        clientName: 'ClientName',
        uri: SOAP_URI,
        clientOptions: {
          endpoint: SOAP_URI,
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
