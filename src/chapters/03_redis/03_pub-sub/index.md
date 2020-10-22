
# Pub/Sub

Redis also supports the PUBLISH and SUBSCRIBE commands, which enable your to do quick messaging and communication between processes.

The way it works is simple:

* `SUBSCRIBE` will listen to a channel
* `PUBLISH` allows you to push a message into a **channel**

Those two commands are all you need to build a messaging system with Redis.

The following command will subscribe to the 'redisChat' channel and will listen to any messages send on that channel.

```text
SUBSCRIBE redisChat
Reading messages... (press Ctrl-C to quit)
```

Publishing messages is as easy as subscribing with the `PUBLISH` command

```text
PUBLISH redisChat "Redis is a great caching technique"
```
