// setup participants dictionary
const participantsDict = [
  { label: 'Volodymyr Vasiliev', value: 'VVasiliev' },
  { label: 'Ivan Ivanov', value: 'IIvanov' },
  { label: 'Dmytro Duritskiy', value: 'DDuritskiy3' },
  { label: 'Ihor Marchuk', value: 'IMarchuk' },
  { label: 'Maksym Vorobiev', value: 'MVorobiev' },
  { label: 'Oleksandr Vakulenko', value: 'OVakulenko' },
  { label: 'Sergii Sergienko', value: 'SSergienko' },
  { label: 'Yevgeniy Yevgenenko', value: 'YYevgenenko' }
]

localStorage.setItem('participantsDict', JSON.stringify(participantsDict))

// setup weekDays dictionary
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
localStorage.setItem('weekDays', JSON.stringify(weekDays))

// setup times dictionary
const times = [10, 11, 12, 13, 14, 15, 16, 17, 18]

localStorage.setItem('times', JSON.stringify(times))


