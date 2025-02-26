import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { MaintenenceController } from './maintenence/maintenence.controller';
import { InspectionController } from './inspection/inspection.controller';
import { VehicleService } from './vehicle.service';

@Module({
  controllers: [VehicleController, MaintenenceController, InspectionController],
  providers: [VehicleService],
})
export class VehicleModule {}
