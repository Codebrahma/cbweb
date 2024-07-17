FROM ubuntu:noble
WORKDIR /app

RUN apt update && DEBIAN_FRONTEND=noninteractive TZ=America/Los_Angeles apt install -y \
  git curl libvips-dev build-essential \
  gcc libreadline-dev libsqlite3-dev

## Install Python 2.7

RUN curl https://pyenv.run | bash

RUN cat > ~/.bash_profile <<\EOF
export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
EOF

RUN ["/bin/bash", "-c", "source ~/.bash_profile && pyenv install 2.7 && pyenv global 2.7"]

## Install Node v14

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

RUN ["/bin/bash", "-c", ". ~/.nvm/nvm.sh && nvm install 14 && nvm use 14 && npm install -g yarn"]
