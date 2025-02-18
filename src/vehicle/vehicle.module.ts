import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { MaintenenceController } from './maintenence/maintenence.controller';
import { InspectionController } from './inspection/inspection.controller';

@Module({
  controllers: [VehicleController, MaintenenceController, InspectionController],
})
export class VehicleModule {}
