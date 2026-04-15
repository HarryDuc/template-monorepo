import { Injectable, HttpException } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class GatewayService {
  constructor(private readonly http: HttpService) {}

  async forward(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: any) {
    try {
      const response = await firstValueFrom(
        this.http.request({ url, method, data })
      )
      return response.data
    } catch (error: any) {
      throw new HttpException(error.response?.data || 'Upstream error', error.response?.status || 500)
    }
  }
}
