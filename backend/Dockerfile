# Use the official Python image
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    git

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire backend project
COPY . .

# Expose the Django development server port
EXPOSE 8000

# Set the default command to run Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
