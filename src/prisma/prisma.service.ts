import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['warn', 'error'],
    });
  }

  /*
  The onModuleInit() function is called when the module is fully initialized, 
  which means all the dependencies are resolved and injected. 

  In this case, it's calling this.$connect(). 
  This suggests that it's establishing a connection to a database or 
  some other service when the module is initialized. 

  The $connect() method is typically a part of Prisma Client, 
  which is used to interact with your database in TypeScript.


  The onModuleDestroy() function is called when the application is about to shut down. 

  It's calling this.$disconnect(), which suggests it's closing the connection to the 
  database or service that was opened during initialization. 
  
  The $disconnect() method is also a part of Prisma Client, 
  which is used to close the database connections when they are no longer needed.

  These lifecycle hooks are useful for managing resources, like database connections, 
  that need to be set up and torn down as part of the application's lifecycle.

  */

  onModuleInit() {
    return this.$connect();
  }

  onModuleDestroy() {
    return this.$disconnect();
  }
}
