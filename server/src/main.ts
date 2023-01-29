import { NestFactory } from "@nestjs/core";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle("Yandex-extension-backend")
    .setDescription("Rest api")
    .setVersion("1.0.0")
    .addTag("SatoruF")
    .build();

    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);


  await app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}

start();