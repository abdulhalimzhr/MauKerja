.SILENT:

DOCKER         = docker
TERMINAL       = $(DOCKER) exec 
COMPOSE        = $(DOCKER)-compose
NPM            = npm
NPM_RUN        = $(NPM) run
CONTAINER      = "maukerja-frontend"

export env

.PHONY: up
up: env
	$(COMPOSE) up -d

.PHONY: build
build: env
	$(COMPOSE) up -d --build
	$(TERMINAL) $(CONTAINER) $(NPM) install
	$(TERMINAL) $(CONTAINER) $(NPM) run build

.PHONY: stop
stop:
	$(COMPOSE) stop

.PHONY: down
down:
	$(COMPOSE) down

.PHONY: log
log:
	$(DOCKER) logs -f $(CONTAINER)

.PHONY: shelf
shell:
	$(TERMINAL) -it $(CONTAINER) sh

.PHONY: start
start: env
	$(NPM_RUN) serve

.PHONY: env
env:
ifeq ($(env),dev)
	cp .env.develompment .env
else ifeq ($(env),prod)
	cp .env.production .env
else
	echo "env not found"
endif