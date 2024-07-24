

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
  