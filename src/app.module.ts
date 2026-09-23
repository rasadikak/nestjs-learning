import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AuthModule } from './auth/Auth.module';
import{UserModule} from './user/User.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookmarkModule } from './bookmark/Bookmark.module';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [AuthModule,
            UserModule,
            PrismaModule,
            BookmarkModule
          ],
})
export class AppModule {}
