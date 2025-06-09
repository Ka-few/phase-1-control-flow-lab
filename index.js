function scuberGreetingForFeet(distance){
 
  if(distance <= 400){
    return 'This one is on me!';// Write your code here!
} else if (distance<=2000){
  return 'That will be twenty bucks.';
} else if (distance<=2500){
  return 'I will gladly take your thirty bucks.';
} else  {
  return 'No can do.';
}
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  return city ==='NYC' ? 'Ok, sounds good.' : 'No go.' // Write your code here!
}
ternaryCheckCity(Pittsburgh)

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
  // Write your code here!
}
switchOnCharmFromTip('generous')
switchOnCharmFromTip('not as generous')
switchOnCharmFromTip('thanks for everything')

