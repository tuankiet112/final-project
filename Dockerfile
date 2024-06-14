# Stage 1 - Build the Angular application
# Sử dụng image cơ bản từ Docker Hub với Node.js version 20
FROM node:20 AS build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có) vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc được liệt kê trong package.json
RUN npm install --legacy-peer-deps

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Chạy lệnh build để tạo bản dựng của ứng dụng Angular
RUN npm run build

# Stage 2 - Serve the application with NGINX
# Sử dụng Nginx làm base image để phục vụ ứng dụng
FROM nginx:alpine

# Sao chép file cấu hình NGINX từ thư mục hiện tại vào thư mục cấu hình của NGINX trong container
COPY nginx.conf /etc/nginx/nginx.conf

# Sao chép các file đã được xây dựng từ giai đoạn 1 vào thư mục phục vụ của NGINX
COPY --from=build /app/dist/final-project /usr/share/nginx/html

# Mở cổng 80 để bên ngoài truy cập vào ứng dụng cổng mặc định của Nginx 
EXPOSE 80

# Khởi động NGINX trong chế độ foreground (chế độ không daemon)
CMD ["nginx", "-g", "daemon off;"]
