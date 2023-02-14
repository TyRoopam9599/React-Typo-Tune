import React from 'react'

const About = (props) => {
  return (
    <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
      <h1 className='mt-3 '>About Us</h1>
      <hr style={{
            
            backgroundColor: props.mode === 'light' ? 'black' : 'white' ,
            height: 1
        }}/>
      <div className="mx-1">
        <h3>Analyze Your Text</h3>
        <p style={{ fontSize: '20px' , textAlign:'justify'}}>
          TypoTune gives you a way to analyze your text quickly and efficiently.
        </p>
        <h3>Free To Use</h3>
        <p style={{ fontSize: '20px', textAlign:'justify'}}>
          TypoTune is a free character counter tool that provides instant character count & word count statistics for a given text. TypoTune reports the number of words and characters. Thus it is suitable for writing text with words/character limit.
        </p>
        <h3>Browser Compatible</h3>
        <p style={{ fontSize: '20px' , textAlign:'justify'}}>
          This word counter software works in any web browsers such as Chrome, Edge, Internet Explorer, Safari, Opera, Firefox. It suits to count character in facebook, blog, books, excel document, pdf document, etc.
        </p>
      </div>
    </div>
  )
}

export default About;