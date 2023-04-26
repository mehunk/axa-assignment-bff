import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { InsuranceQuote } from './interfaces/insurance-quote.interface';
import { CreateInsuranceQuoteDto } from './dto/create-insurance-quote.dto';
import { UpdateInsuranceQuoteDto } from './dto/update-insurance-quote.dto';

@Injectable()
export class InsuranceQuotesService {
  constructor(private readonly httpService: HttpService) {}
  async create(
    createInsuranceQuoteDto: CreateInsuranceQuoteDto,
  ): Promise<InsuranceQuote> {
    const { data } = await firstValueFrom(
      this.httpService.post('/insurance-quotes', createInsuranceQuoteDto),
    );
    return data;
  }

  findAll() {
    return `This action returns all insuranceQuotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insuranceQuote`;
  }

  update(id: number, updateInsuranceQuoteDto: UpdateInsuranceQuoteDto) {
    return `This action updates a #${id} insuranceQuote`;
  }

  remove(id: number) {
    return `This action removes a #${id} insuranceQuote`;
  }
}
