

type ApplicationConfig = {
    host: string,
    port: number
}








export const applicationConfig: ApplicationConfig = {
    host: process.env.HOST || "host",
    port: parseInt(process.env.PORT || "3000")

} 