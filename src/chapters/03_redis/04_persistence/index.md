
# Redis Persistence

Redis is an in-memory database. This means that when you restart the server, or in case of power loss, you lose all the data stored in the RAM.

To prevent dataloss, Redis implements 2 different types of persistence:

* RDB - Redis Database File
* AOF - Append-Only File

## RDB advantages

* RDB is a very compact single-file point-in-time representation of your Redis data. RDB files are perfect for backups.
* RDB is very good for disaster recovery hence the snapshot is a single file.
* RDB maximizes Redis performances as it forks a child process that does the persistence work.
* RDB allows faster restarts with big datasets compared to AOF.

## RDB disadvantages

* RDB is NOT good if you need to minimize the chance of data loss.
* Forking a child process can be time-consuming with large datasets.

## AOF advantages

* More durable than RDP.
* The AOF log is an append-only log, so there are no corruption problems if there is a power outage.

## AOF disadvantages

* AOF files are usually bigger than the equivalent RDB files for the same dataset.
* AOF can be slower than RDB depending on the exact fsyncpolicy. (fsyncpolicy is _every second_ — the default - _every command_ or _never_)
