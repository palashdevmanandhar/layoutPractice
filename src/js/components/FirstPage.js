import React,{Component} from "react";


export default class FirstPage extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <div style={styles.MainPart}>
          <div style={styles.SubPart1}>
            <div style={styles.section1}>
            </div>
            <div style={styles.section2}>
               <div style={styles.part1}>
                 <h1><b>All Applications</b></h1>
               </div>
               <div style={styles.blankpart}>
               </div>
               <div style={styles.part2}>
                 <h3>Cross </h3>
               </div>
            </div>
            <div style={styles.section3}>
              <div><input /></div>
              <div> cross</div>
            </div>
            <div style={styles.section4}>
              <div style={styles.foura}></div>
              <div style={styles.fourb}>
                <div style={styles.b1}>row 1</div>
                <div style={styles.blank1}>blank 1</div>
                <div style={styles.b2}> row 2</div>
                <div style={styles.blank2}> blank2</div>
                <div style={styles.b3}> row 3</div>
              </div>
              <div style={styles.fourc}>
              </div>
           </div>
          </div>
          <div style={styles.SubPart2}>

          </div>
        </div>
      </div>

    )
  }
}

const styles ={
  MainPart :{
    backgroundColor : 'red',
    display:'flex',
    height : '100vh',
    width :'100vw',
    flexDirection :'column'
  },

  SubPart1 : {
    backgroundColor:" blue",
    flex: 45,
    display:'flex',
    flexDirection:'column'
  },

  SubPart2 : {
    backgroundColor:"orange",
    flex: 55

  },

  section1 : {
    flex:17,
    backgroundColor:"yellow"
  },
  section2 : {
    flex:22,
    backgroundColor:"pink",
    display:'flex'
  },
  section3 : {
    flex:11,
    backgroundColor:"black",
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  section4 : {
    flex:50,
    backgroundColor:"grey",
    display:'flex',

  },

  part1:{
    backgroundColor:'white',
    flex:35,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'

  },

  blankpart:{
    backgroundColor:'brown',
    flex:57
  },
  part2:{
    float: 'right',
    backgroundColor:'orange',
    flex:8,
    display:'flex',
    alignItems:'center',


  },
  foura :{
    flex : 15,
    backgroundColor:'purple'
  },
  fourb :{
    flex : 73,
    backgroundColor:'grey',
    display:'flex',
    flexDirection:'column'
  },
  fourc :{
    flex : 12,
    backgroundColor:'yellow'
  },
  b1:{
    flex:30,
    display:'flex',
    alignItems:'center',
    backgroundColor:'red',
    width: '100%' ,
    border: '1px solid black',

  },
  b2:{
    flex:30,
    display:'flex',
    alignItems:'center',
    width: '100%' ,
    border: '1px solid black',
    backgroundColor:'green'
  },
  b3:{
    flex:30,
    display:'flex',
    alignItems:'center',
    backgroundColor:'blue',
    width: '100%' ,
    border: '1px solid black',

    },
    blank1:{
      flex:5
    },
    blank2:{
      flex:5
    }

}
