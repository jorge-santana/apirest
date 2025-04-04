import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './customer/customer.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { RentalModule } from './rental/rental.module';
import { PaymentModule } from './payment/payment.module';
import { PdfModule } from './pdf/pdf.module';
import { AuthGuard } from './guards/auth/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomerModule,
    VehicleModule,
    RentalModule,
    PaymentModule,
    PdfModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
