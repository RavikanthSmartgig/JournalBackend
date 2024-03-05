import { Module } from '@nestjs/common';
import { JournalService } from './journal/journal.service';
import { JournalController } from './journal/journal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_NAME, DB_URL } from './config';
import { JournalEntity } from './journal/journal.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://admin:quiz%402021%24@13.127.77.82/?authMechanism=SCRAM-SHA-1',
      // database: DB_NAME,
      entities: [JournalEntity],
    }),
    TypeOrmModule.forFeature([JournalEntity]),
  ],
  controllers: [JournalController],
  providers: [JournalService],
})
export class AppModule {}
