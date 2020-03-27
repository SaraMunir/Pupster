import React from 'react';
function AboutPage(){
    const aboutStyle= {
        height: '80vh',
        backgroundImage: 'url("https://i.imgur.com/qkdpN.jpg%22);',
        backgroundSize: 'cover',
        backgroundPostition: 'center' 
    }
    return (
        <div>
            <div class="jumbotron jumbotron-fluid" style={aboutStyle}>
                <div class="container text-center">
                    <h1 class="display-4">Pupster</h1>
                    <p class="lead">They're the Good Boys and Girls</p>
                </div>
            </div>
            <h2 className="container">Welcome to Pupster</h2>
            <p className="container">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto beatae consequuntur et distinctio suscipit, reprehenderit fuga dicta delectus sequi vitae asperiores quos? Officiis, hic. Ipsam expedita minus repellat officiis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto beatae consequuntur et distinctio suscipit, reprehenderit fuga dicta delectus sequi vitae asperiores quos? Officiis, hic. Ipsam expedita minus repellat officiis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto beatae consequuntur et distinctio suscipit, reprehenderit fuga dicta delectus sequi vitae asperiores quos? Officiis, hic. Ipsam expedita minus repellat officiis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto beatae consequuntur et distinctio suscipit, reprehenderit fuga dicta delectus sequi vitae asperiores quos? Officiis, hic. Ipsam expedita minus repellat officiis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto beatae consequuntur et distinctio suscipit, reprehenderit fuga dicta delectus sequi vitae asperiores quos? Officiis, hic. Ipsam expedita minus repellat officiis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto beatae consequuntur et distinctio suscipit, reprehenderit fuga dicta delectus sequi vitae asperiores quos? Officiis, hic. Ipsam expedita minus repellat officiis.
            </p>
        </div>
    )
}
export default AboutPage;