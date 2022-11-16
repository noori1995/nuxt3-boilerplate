build:
	docker build -t landing:1.0.0 .
srv_up:
	docker rm  -f my_landing && docker compose up -d