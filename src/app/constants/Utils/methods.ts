

export const shuffleOptions = (array: string[]) => {
    let currentIndex = array.length;
    let randomIndex, temp; 
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    
    return array; 
  }
  

  //Timer functions

  export const displayTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return (`${zeroAdderToOneDigit(mins)}:${zeroAdderToOneDigit(secs)}`);
  }

  const zeroAdderToOneDigit = (num: number) => {
    return num < 10 ? "0" + num : num;
  }