FROM alpine

WORKDIR /app

COPY test.js .

# While building the image
RUN apk add --update nodejs

RUN apk add --update npm

RUN npm install express

# While running the image
CMD node test.js


#  javac => compile code
#  java => run code
