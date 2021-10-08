
//// remove duplicate letter
function RemoveDupicate(str)
{
    return str
    .split('')
    .filter(function(item, pos, self) {
        
      return self.indexOf(item) == pos;
    })
    .join('');
}

console.log(RemoveDupicate('automation'));