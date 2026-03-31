export const coreSubjects = [
  {
    subject: "Operating Systems",
    modules: [
      {
        name: "Processes & Threads",
        topics: [
          {
            id: 1001,
            title: "Introduction to Process Management",
            importance: "High",
            link: "https://www.geeksforgeeks.org/introduction-of-process-management/",
          },
          {
            id: 1002,
            title: "Threads and Multithreading",
            importance: "High",
            link: "https://www.geeksforgeeks.org/thread-in-operating-system/",
          },
          {
            id: 1003,
            title: "CPU Scheduling Algorithms",
            importance: "High",
            link: "https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/",
          },
        ],
      },
      {
        name: "Memory Management",
        topics: [
          {
            id: 1004,
            title: "Paging and Page Replacement",
            importance: "High",
            link: "https://www.geeksforgeeks.org/paging-in-operating-system/",
          },
          {
            id: 1005,
            title: "Virtual Memory",
            importance: "High",
            link: "https://www.geeksforgeeks.org/virtual-memory-in-operating-system/",
          },
          {
            id: 1006,
            title: "Deadlock — Detection & Prevention",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/deadlock-in-operating-system/",
          },
        ],
      },
      {
        name: "Synchronization",
        topics: [
          {
            id: 1007,
            title: "Critical Section & Mutex",
            importance: "High",
            link: "https://www.geeksforgeeks.org/mutex-vs-semaphore/",
          },
          {
            id: 1008,
            title: "Semaphores",
            importance: "High",
            link: "https://www.geeksforgeeks.org/semaphores-in-process-synchronization/",
          },
          {
            id: 1009,
            title: "Classical IPC Problems (Dining Philosophers, etc.)",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/dining-philosophers-problem/",
          },
        ],
      },
      {
        name: "File & I/O",
        topics: [
          {
            id: 1010,
            title: "File Systems",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/file-systems-in-operating-system/",
          },
          {
            id: 1011,
            title: "Disk Scheduling",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/disk-scheduling-algorithms/",
          },
        ],
      },
    ],
  },
  {
    subject: "DBMS",
    modules: [
      {
        name: "Foundations & SQL",
        topics: [
          {
            id: 1101,
            title: "ER Model & Relational Model",
            importance: "High",
            link: "https://www.geeksforgeeks.org/introduction-of-er-model/",
          },
          {
            id: 1102,
            title: "SQL — SELECT, JOINs, Aggregates",
            importance: "High",
            link: "https://www.geeksforgeeks.org/sql-tutorial/",
          },
          {
            id: 1103,
            title: "Keys & Constraints",
            importance: "High",
            link: "https://www.geeksforgeeks.org/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/",
          },
        ],
      },
      {
        name: "Normalization",
        topics: [
          {
            id: 1104,
            title: "Functional Dependencies",
            importance: "High",
            link: "https://www.geeksforgeeks.org/functional-dependency-in-dbms/",
          },
          {
            id: 1105,
            title: "Normal Forms (1NF–BCNF)",
            importance: "High",
            link: "https://www.geeksforgeeks.org/normal-forms-in-dbms/",
          },
        ],
      },
      {
        name: "Transactions",
        topics: [
          {
            id: 1106,
            title: "ACID Properties",
            importance: "High",
            link: "https://www.geeksforgeeks.org/acid-properties-in-dbms/",
          },
          {
            id: 1107,
            title: "Transaction States & Schedules",
            importance: "High",
            link: "https://www.geeksforgeeks.org/transaction-isolation-levels-dbms/",
          },
          {
            id: 1108,
            title: "Concurrency Control (2PL, Timestamp)",
            importance: "High",
            link: "https://www.geeksforgeeks.org/concurrency-control-in-dbms/",
          },
        ],
      },
      {
        name: "Indexing & Query Processing",
        topics: [
          {
            id: 1109,
            title: "Indexing in DBMS",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/indexing-in-databases-set-1/",
          },
          {
            id: 1110,
            title: "B+ Trees",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/introduction-of-b-tree/",
          },
        ],
      },
    ],
  },
  {
    subject: "Computer Networks",
    modules: [
      {
        name: "Layers & Models",
        topics: [
          {
            id: 1201,
            title: "OSI Model",
            importance: "High",
            link: "https://www.geeksforgeeks.org/layers-of-osi-model/",
          },
          {
            id: 1202,
            title: "TCP/IP Model",
            importance: "High",
            link: "https://www.geeksforgeeks.org/tcp-ip-model/",
          },
        ],
      },
      {
        name: "Transport & Application",
        topics: [
          {
            id: 1203,
            title: "TCP vs UDP",
            importance: "High",
            link: "https://www.geeksforgeeks.org/differences-between-tcp-and-udp/",
          },
          {
            id: 1204,
            title: "HTTP / HTTPS & REST basics",
            importance: "High",
            link: "https://www.geeksforgeeks.org/difference-between-http-and-https/",
          },
          {
            id: 1205,
            title: "DNS",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/domain-name-system-dns-in-application-layer/",
          },
        ],
      },
      {
        name: "Network Layer",
        topics: [
          {
            id: 1206,
            title: "IP Addressing & Subnetting",
            importance: "High",
            link: "https://www.geeksforgeeks.org/introduction-of-classful-ip-addressing/",
          },
          {
            id: 1207,
            title: "Routing (Distance Vector, Link State)",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/routing-v1-and-routing-v2/",
          },
        ],
      },
      {
        name: "Data Link & Physical",
        topics: [
          {
            id: 1208,
            title: "MAC Addressing & ARP",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/how-address-resolution-protocol-arp-works/",
          },
          {
            id: 1209,
            title: "Flow & Error Control",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/flow-control-in-data-link-layer/",
          },
        ],
      },
    ],
  },
  {
    subject: "Object-Oriented Programming",
    modules: [
      {
        name: "Core Concepts",
        topics: [
          {
            id: 1301,
            title: "Classes, Objects & Encapsulation",
            importance: "High",
            link: "https://www.geeksforgeeks.org/encapsulation-in-java/",
          },
          {
            id: 1302,
            title: "Inheritance & Polymorphism",
            importance: "High",
            link: "https://www.geeksforgeeks.org/inheritance-in-java/",
          },
          {
            id: 1303,
            title: "Abstraction & Interfaces",
            importance: "High",
            link: "https://www.geeksforgeeks.org/abstraction-in-java-2/",
          },
        ],
      },
      {
        name: "Design Principles",
        topics: [
          {
            id: 1304,
            title: "SOLID Principles",
            importance: "High",
            link: "https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/",
          },
          {
            id: 1305,
            title: "Composition vs Inheritance",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/composition-in-java/",
          },
        ],
      },
      {
        name: "Patterns (Interview Essentials)",
        topics: [
          {
            id: 1306,
            title: "Singleton, Factory, Observer (overview)",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/software-design-patterns/",
          },
        ],
      },
    ],
  },
  {
    subject: "Computer Organization & Architecture",
    modules: [
      {
        name: "Number Systems & CPU",
        topics: [
          {
            id: 1401,
            title: "Number Systems & Boolean Algebra",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/number-system-and-base-conversions/",
          },
          {
            id: 1402,
            title: "CPU Components & Instruction Cycle",
            importance: "High",
            link: "https://www.geeksforgeeks.org/computer-organization-basic-computer-instructions/",
          },
        ],
      },
      {
        name: "Memory & Pipelining",
        topics: [
          {
            id: 1403,
            title: "Cache Memory",
            importance: "High",
            link: "https://www.geeksforgeeks.org/cache-memory-in-computer-organization/",
          },
          {
            id: 1404,
            title: "Instruction Pipelining",
            importance: "Medium",
            link: "https://www.geeksforgeeks.org/computer-organization-pipelining-set-1-execution-stage-and-performances/",
          },
        ],
      },
    ],
  },
];
