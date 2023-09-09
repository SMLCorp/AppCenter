FROM debian:bullseye
RUN apt-get update && apt-get install -y \
    curl \
    git \
    build-essential \
    pkg-config g++ gcc make python3

COPY --from=golang:1.21.1-bullseye /usr/local/go/ /usr/local/go/
ENV PATH="$PATH:/usr/local/go/bin"

COPY --from=node:18.16.0-bullseye-slim /usr/local/ /usr/local/
ENV PATH="$PATH:/usr/local/lib/node_modules/.bin"
RUN npm install -g pnpm@7.32.2

#RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
COPY --from=rust:1.69-slim-bullseye /usr/local/ /usr/local/
ENV PATH="$PATH:/usr/local/cargo/bin"
ENV RUSTUP_HOME=/usr/local/rustup
ENV CARGO_HOME=/usr/local/cargo

# install gh

RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && apt update \
    && apt install gh -y

