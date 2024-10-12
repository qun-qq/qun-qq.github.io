---
title: Java并发
date: 2024-10-09 10:52:57
tags: Java
category: 面试
toc: true
---

#### 创建线程的方式

1. 继承**Thread**类
2. 实现**Runnable**接口
3. 实现**Callable**接口
4. 使用**线程池**

#### sleep()和wait()的区别

* sleep()是Thread类的静态本地方法，而wait()是Object类的本地方法
* sleep()没有释放锁，wait()会释放锁
* sleep()重点在于暂停当前线程，wait()重点在于线程间的交互
* sleep()必须指定一个时间，时间到了后线程恢复运行，wait()可以选择指定时间，若不指定时间则需要其他线程使用notify()或notifyAll()唤醒

#### volatile关键字

在Java中将变量声明为**volatile**，表示此变量是多线程共享的，每次读取时都到**主存**中读取。



#### 乐观锁和悲观锁

悲观锁总是假设最坏的情况，每次获取共享资源时先上锁，如果其他线程需要资源就会阻塞。例如**Synchronized关键字**和**ReentrantLock独占锁**。

乐观锁总是假设最好的情况，线程获取资源时不上锁，而是在提交修改的时候去验证对应的资源是否被其他线程修改了，例如**CAS算法**。

悲观锁适合于写操作较多，乐观锁适合于读操作较多。



#### 线程池

##### 创建方法

1. 通过**ThreadPoolExecutor**构造函数传入参数创建
2. 通过Executor框架的工具类Executors创建

##### 线程池参数

```
public ThreadPoolExecutor(
	int corePoolSize,//线程池的核心线程数量
    int maximumPoolSize,//线程池的最大线程数
    long keepAliveTime,//当线程数大于核心线程数时，多余的空闲线程存活的最长时间
    TimeUnit unit,//时间单位
    BlockingQueue<Runnable> workQueue,//任务队列，用来储存等待执行任务的队列
    ThreadFactory threadFactory,//线程工厂，用来创建线程，一般默认即可
    RejectedExecutionHandler handler//拒绝策略，当提交的任务过多而不能及时处理时，我们可以定制策略来处理任务) 
```



##### 拒绝策略

* ThreadPoolExecutor.AbortPolicy（默认）：直接拒绝任务并抛出异常
* ThreadPoolExecutor.CallerRunsPolicy：调用自己的线程来执行任务
* ThreadPoolExecutor.CallerRunsPolicy：直接拒绝任务，不报异常
* ThreadPoolExecutor.DiscardOldestPolicy：丢弃掉最早的未处理任务，把新的任务加入队列
