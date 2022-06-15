FROM openjdk:11.0.4-jre-slim
ADD target/*.jar app.jar
ENTRYPOINT ["sh", "-c", "java -jar /app.jar"]