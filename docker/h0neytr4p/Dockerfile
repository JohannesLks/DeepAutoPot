FROM golang:1.23-alpine AS builder
WORKDIR /app
#
RUN apk -U upgrade
RUN apk -U add git openssl
RUN git clone https://github.com/t3chn0m4g3/h0neytr4p -b v0.33 /app
RUN go mod download
RUN go mod tidy
RUN go build -o /app/main
#
FROM scratch
#
COPY --from=builder /app/main /opt/h0neytr4p/h0neytr4p
COPY --from=builder /app/traps /opt/h0neytr4p/traps
#
WORKDIR /opt/h0neytr4p
USER 2000:2000
CMD ["-cert=app.crt", "-key=app.key", "-log=log/log.json", "-catchall=false", "-payload=/data/h0neytr4p/payloads/", "-wildcard=true", "-traps=traps/"]
ENTRYPOINT ["./h0neytr4p"]
