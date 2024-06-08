FROM node:18.16.1

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install Python and online-judge-tools
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv
RUN python3 -m venv /opt/venv
RUN /opt/venv/bin/pip install -U online-judge-tools

# Set the virtual environment as the default Python
ENV PATH="/opt/venv/bin:$PATH"

# Set BROWSER environment variable to prevent browser launch
ENV BROWSER="none"

# Copy the rest of the application
COPY . .
