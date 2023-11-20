
Repro:

```bash
# start manticore
dev/restart_docker.sh


# set log verbosity to max
$ dev/shell.sh
# as documented here: https://manual.manticoresearch.com/Server_settings/Setting_variables_online#SET
> SET GLOBAL LOG_LEVEL=debugvv;
```

Separate shell for logs
```bash
docker logs -f manticore
```

Start elixir + MyXQL
```bash
cd source
iex -S mix
> MyXQL.start_link(port: 9306, hostname: "127.0.0.1")
{:ok, #PID<0.213.0>}
** (EXIT from #PID<0.212.0>) shell process exited with reason: killed
```

Output logs:

```

DEBUG: got events=1, tick=32, interrupted=0
DEBUG: -~-~-~-~-~-~-~-~ MT sched created -~-~-~-~-~-~-~-~
DEBUG: 0xaaab222fd1b0 accepted mysql, sock=19, tick=32
DEBUG: 0xaaab222fd1b0 accepted 1 connections all, tick=32
DEBUG: Sending handshake...
DEBUG: AsyncSend 160 bytes, sock=19
DEBUG: DiscardProcessed(0) iPos=0->0, iLen=0->0, sock=19
DEBUG: Receiving command... 0 bytes in buf
DEBUG: SockRecv 19, for 4096 bytes
DEBUG: AsyncRecvNBChunk -1 when read 4096 bytes, sock=19
DEBUG: AsyncRecvNBChunk -1 bytes (4 requested), sock=19
DEBUG: Still need to receive 4 bytes, sock=19
DEBUG: Coro::YieldWith (m_iEvent=0), timeout 899999992
DEBUG: AddAction action as 19, events 13, timeout 448681557
DEBUG: Kick
DEBUG: got events=1, tick=33, interrupted=0
DEBUG: 0xffff74001400 epoll 12 setup, ev=0x3221225473, op=EPOLL_CTL_ADD, sock=19
DEBUG: got events=1, tick=34, interrupted=0
DEBUG: EngageWaiterAndYield awake (m_iSock=19, events=1)
DEBUG: SockRecv 19, for 4096 bytes
DEBUG: AsyncRecvNBChunk 0 when read 4096 bytes, sock=19
DEBUG: SyncSockRead: AsyncRecvNBChunk returned 0, sock=19
DEBUG: SyncSockRead: connection reset, sock=19
DEBUG: conn 192.168.215.1:48340(13), sock=19: bailing on failed MySQL header, invalid size read 4(-1)
DEBUG: Destroying and closing sock=19
DEBUG: AddAction action as 19, events 16, timeout 448681557
DEBUG: Kick
DEBUG: got events=1, tick=35, interrupted=0
DEBUG: 0xffff74001400 polling remove, ev=16, sock=19
DEBUG: SockWrapper_c::Impl_c::~Impl_c (); sent 160, received 0
DEBUG: got events=1, tick=36, interrupted=0
DEBUG: -~-~-~-~-~-~-~-~ MT sched created -~-~-~-~-~-~-~-~
DEBUG: 0xaaab222fd1b0 accepted mysql, sock=19, tick=36
DEBUG: 0xaaab222fd1b0 accepted 1 connections all, tick=36
DEBUG: Sending handshake...
DEBUG: AsyncSend 160 bytes, sock=19
DEBUG: DiscardProcessed(0) iPos=0->0, iLen=0->0, sock=19
DEBUG: Receiving command... 0 bytes in buf
DEBUG: SockRecv 19, for 4096 bytes
DEBUG: AsyncRecvNBChunk -1 when read 4096 bytes, sock=19
DEBUG: AsyncRecvNBChunk -1 bytes (4 requested), sock=19
DEBUG: Still need to receive 4 bytes, sock=19
DEBUG: Coro::YieldWith (m_iEvent=0), timeout 899999995
DEBUG: AddAction action as 19, events 13, timeout 448686236
DEBUG: Kick
DEBUG: got events=1, tick=37, interrupted=0
DEBUG: 0xffff74001400 epoll 12 setup, ev=0x3221225473, op=EPOLL_CTL_ADD, sock=19
DEBUG: got events=1, tick=38, interrupted=0
DEBUG: EngageWaiterAndYield awake (m_iSock=19, events=1)
DEBUG: SockRecv 19, for 4096 bytes
DEBUG: AsyncRecvNBChunk 0 when read 4096 bytes, sock=19
DEBUG: SyncSockRead: AsyncRecvNBChunk returned 0, sock=19
DEBUG: SyncSockRead: connection reset, sock=19
DEBUG: conn 192.168.215.1:48352(14), sock=19: bailing on failed MySQL header, invalid size read 4(-1)
DEBUG: Destroying and closing sock=19
DEBUG: AddAction action as 19, events 16, timeout 448686236
DEBUG: Kick
DEBUG: got events=1, tick=39, interrupted=0
DEBUG: 0xffff74001400 polling remove, ev=16, sock=19
DEBUG: SockWrapper_c::Impl_c::~Impl_c (); sent 160, received 0
DEBUG: got events=1, tick=40, interrupted=0
DEBUG: -~-~-~-~-~-~-~-~ MT sched created -~-~-~-~-~-~-~-~
DEBUG: 0xaaab222fd1b0 accepted mysql, sock=19, tick=40
DEBUG: 0xaaab222fd1b0 accepted 1 connections all, tick=40
DEBUG: Sending handshake...
DEBUG: AsyncSend 160 bytes, sock=19
DEBUG: DiscardProcessed(0) iPos=0->0, iLen=0->0, sock=19
DEBUG: Receiving command... 0 bytes in buf
DEBUG: SockRecv 19, for 4096 bytes
DEBUG: AsyncRecvNBChunk -1 when read 4096 bytes, sock=19
DEBUG: AsyncRecvNBChunk -1 bytes (4 requested), sock=19
DEBUG: Still need to receive 4 bytes, sock=19
DEBUG: Coro::YieldWith (m_iEvent=0), timeout 899999995
DEBUG: AddAction action as 19, events 13, timeout 448690816
DEBUG: Kick
DEBUG: got events=1, tick=41, interrupted=0
DEBUG: 0xffff74001400 epoll 12 setup, ev=0x3221225473, op=EPOLL_CTL_ADD, sock=19
DEBUG: got events=1, tick=42, interrupted=0
DEBUG: EngageWaiterAndYield awake (m_iSock=19, events=1)
DEBUG: SockRecv 19, for 4096 bytes
DEBUG: AsyncRecvNBChunk 0 when read 4096 bytes, sock=19
DEBUG: SyncSockRead: AsyncRecvNBChunk returned 0, sock=19
DEBUG: SyncSockRead: connection reset, sock=19
DEBUG: conn 192.168.215.1:48356(15), sock=19: bailing on failed MySQL header, invalid size read 4(-1)
DEBUG: Destroying and closing sock=19
DEBUG: AddAction action as 19, events 16, timeout 448690816
DEBUG: Kick
DEBUG: got events=1, tick=43, interrupted=0
DEBUG: 0xffff74001400 polling remove, ev=16, sock=19
DEBUG: SockWrapper_c::Impl_c::~Impl_c (); sent 160, received 0
DEBUG: got events=1, tick=44, interrupted=0
DEBUG: -~-~-~-~-~-~-~-~ MT sched created -~-~-~-~-~-~-~-~
DEBUG: 0xaaab222fd1b0 accepted mysql, sock=19, tick=44
DEBUG: 0xaaab222fd1b0 accepted 1 connections all, tick=44
DEBUG: Sending handshake...
DEBUG: AsyncSend 160 bytes, sock=19
DEBUG: DiscardProcessed(0) iPos=0->0, iLen=0->0, sock=19
DEBUG: Receiving command... 0 bytes in buf
DEBUG: SockRecv 19, for 4096 bytes
DEBUG: AsyncRecvNBChunk -1 when read 4096 bytes, sock=19
DEBUG: AsyncRecvNBChunk -1 bytes (4 requested), sock=19
DEBUG: Still need to receive 4 bytes, sock=19
DEBUG: Coro::YieldWith (m_iEvent=0), timeout 899999995
DEBUG: AddAction action as 19, events 13, timeout 448694094
DEBUG: Kick
DEBUG: got events=1, tick=45, interrupted=0
DEBUG: 0xffff74001400 epoll 12 setup, ev=0x3221225473, op=EPOLL_CTL_ADD, sock=19
DEBUG: got events=1, tick=46, interrupted=0
DEBUG: EngageWaiterAndYield awake (m_iSock=19, events=1)
DEBUG: SockRecv 19, for 4096 bytes
DEBUG: AsyncRecvNBChunk 0 when read 4096 bytes, sock=19
DEBUG: SyncSockRead: AsyncRecvNBChunk returned 0, sock=19
DEBUG: SyncSockRead: connection reset, sock=19
DEBUG: conn 192.168.215.1:48362(16), sock=19: bailing on failed MySQL header, invalid size read 4(-1)
DEBUG: Destroying and closing sock=19
DEBUG: AddAction action as 19, events 16, timeout 448694094
DEBUG: Kick
DEBUG: got events=1, tick=47, interrupted=0
DEBUG: 0xffff74001400 polling remove, ev=16, sock=19
DEBUG: SockWrapper_c::Impl_c::~Impl_c (); sent 160, received 0
DEBUG: got events=1, tick=48, interrupted=0
DEBUG: -~-~-~-~-~-~-~-~ MT sched created -~-~-~-~-~-~-~-~
DEBUG: 0xaaab223295c0 accepted sphinx and http(s), sock=19, tick=48
DEBUG: 0xaaab223295c0 accepted 1 connections all, tick=48
DEBUG: SockRecv 19, for 134217728 bytes
DEBUG: AsyncRecvNBChunk 196 when read 134217728 bytes, sock=19
DEBUG: AsyncRecvNBChunk 196 bytes (0 requested), sock=19
DEBUG: +++++ Probing revealed 196 bytes: HTTP
DEBUG: DiscardProcessed(0) iPos=0->0, iLen=196->196, sock=19
DEBUG: DiscardProcessed(196) iPos=196->0, iLen=196->0, sock=19
DEBUG: AsyncSend 3014 bytes, sock=19
DEBUG: Destroying and closing sock=19
DEBUG: SockWrapper_c::Impl_c::~Impl_c (); sent 3014, received 196
DEBUG: got events=1, tick=49, interrupted=0
DEBUG: -~-~-~-~-~-~-~-~ MT sched created -~-~-~-~-~-~-~-~
DEBUG: 0xaaab223295c0 accepted sphinx and http(s), sock=19, tick=49
DEBUG: 0xaaab223295c0 accepted 1 connections all, tick=49
DEBUG: SockRecv 19, for 134217728 bytes
DEBUG: AsyncRecvNBChunk 196 when read 134217728 bytes, sock=19
DEBUG: AsyncRecvNBChunk 196 bytes (0 requested), sock=19
DEBUG: +++++ Probing revealed 196 bytes: HTTP
DEBUG: DiscardProcessed(0) iPos=0->0, iLen=196->196, sock=19
DEBUG: DiscardProcessed(196) iPos=196->0, iLen=196->0, sock=19
DEBUG: AsyncSend 307 bytes, sock=19
DEBUG: Destroying and closing sock=19
DEBUG: SockWrapper_c::Impl_c::~Impl_c (); sent 307, received 196
```
