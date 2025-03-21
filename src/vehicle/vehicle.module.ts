import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { MaintenenceController } from './maintenence/maintenence.controller';
import { InspectionController } from './inspection/inspection.controller';
import { VehicleService } from './vehicle.service';
import { AuthorizationMiddleware } from 'src/middlewares/authorization/authorization.middleware';

@Module({
  controllers: [VehicleController, MaintenenceController, InspectionController],
  providers: [VehicleService],
})
export class VehicleModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthorizationMiddleware).forRoutes(
      { path: 'api/v1/vehicle', method: RequestMethod.ALL },
      { path: 'api/v1/vehicle/:id', method: RequestMethod.ALL },
      {
        path: 'api/v1/vehicle/:brand/:doors/seats/:seats',
        method: RequestMethod.GET,
      },
    );
  }
}
