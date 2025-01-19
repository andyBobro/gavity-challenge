import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

export class BaseHTTPInstance {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string, apiKey: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })
  }

  async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url, params)
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }

  async post<T>(url: string, data: Record<string, unknown>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(url, data)
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }

  async put<T>(url: string, data: Record<string, unknown>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(url, data)
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(url)
      return response.data
    } catch (error) {
      this.handleError(error)
    }
  }

  private handleError(error: unknown): never {
    console.error('HTTP Error:', error)
    throw error
  }
}
