# Gunakan image dasar Python yang ringan
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Salin file requirements.txt dan install dependensi
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Salin semua file ke working directory
COPY . .

# Ekspose port yang akan digunakan oleh aplikasi
EXPOSE 5000

# Perintah untuk menjalankan aplikasi
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
