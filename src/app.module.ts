import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AuthModule } from './auth/Auth.module';
import{UserModule} from './user/User.module';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [AuthModule,
            UserModule
          ],
})
export class AppModule {}
