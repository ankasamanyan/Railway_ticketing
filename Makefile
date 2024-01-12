all: run

run:
	docker-compose up

build:
	docker-compose up --build


down:
	docker-compose down

login_backend:
	docker exec -it backend sh

login_frontend:
	docker exec -it frontend sh

git:
	git add .
	@read -p "Enter the commit message: " halp; \
	git commit -m "$$halp"
	git push
	@echo $(PURPLE) ✨All added, commited and pushed✨ $(RESET)

push:
	git add .
	git commit -m "✨"
	git push
	@echo $(PURPLE) ✨All added, commited and pushed✨ $(RESET)

pull:
	git stash save
	git pull
	git stash pop
	@echo $(PURPLE) ✨Synchronized✨ $(RESET)
