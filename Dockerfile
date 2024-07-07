# Use the official PostgreSQL image from the Docker Hub
FROM postgres:latest

# Set environment variables for PostgreSQL
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=yourpassword
ENV POSTGRES_DB=postgres

# Expose the PostgreSQL port
EXPOSE 5432

# Optional: Add initialization scripts to the container
# COPY init.sql /docker-entrypoint-initdb.d/
