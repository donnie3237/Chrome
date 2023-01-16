import { createSignal ,createEffect } from "solid-js";
import toast from "solid-toast";
import './mp.scss'
import plogo from '../assets/img/plogo.jfif'
import logo from '../assets/img/logo.png'
import github from '../assets/img/giithub.png'
import gpt from '../assets/img/AI.jfif'
import vx from '../assets/img/vx.jfif'
import rust from '../assets/img/rust.jfif'
import npm from '../assets/img/npm.png'
import calc from '../assets/img/cc.png'
import tc from '../assets/img/thinkerCad.png'
import tf from '../assets/img/tf.jfif'
import gd from '../assets/img/googleDrive.jfif'
import od from '../assets/img/od.png'
import mongo from '../assets/img/mongo.jfif'
import ms from '../assets/img/Microsoft-365-Icon.jpg'
import yt from '../assets/img/yt.png'
import fb from '../assets/img/fb.png'
import rm from '../assets/img/rm.png'
import ps from '../assets/img/ps.png'
import cc from '../assets/img/wf.jfif'
import ct from '../assets/img/ct.jfif'
import nf from '../assets/img/netlify.png'
import dose from '../assets/img/plogo.jfif'
function MainPage() {
    const [goog , setGoog] = createSignal<string>("")
    const [local ,setLocal] = createSignal<number>(0)
    createEffect
    function Actionnd(){
        let partOne = document.getElementById('one') as HTMLElement;
        let partTwo  = document.getElementById('two')  as HTMLElement;
        let partThree  = document.getElementById('three')as HTMLElement ;
        partOne.style.width = "40%"
        partTwo.style.width = "0%"
        partThree.style.width = "60%"
    }
    function Actionst(){
        let partOne = document.getElementById('one') as HTMLElement;
        let partTwo  = document.getElementById('two')  as HTMLElement;
        let partThree  = document.getElementById('three')as HTMLElement ;
        const Info = document.getElementById('info') as HTMLElement ;
        partOne.style.width = "calc(100vw - 30px)"
        partTwo.style.width = "30px"
        partThree.style.width = "0%"
        Info.style.left = "-70vw"
    }
    function link_Goog(){
        window.open(`https://www.google.com/search?q=${goog()}`,'_blank')
    }
    function googleKey(event : any){
        
        if(event.key === 'Enter'){
            link_Goog();
        }else if(event.key === ' '||'g'||'G'|| 'f'||'F'||'Y'|| 'y'||'c'||'C'||'i'||'q'){
            const  partOne = document.getElementById('one') as HTMLElement;
            partOne.style.width = "calc(40%)"
            setTimeout(() => {
                partOne.style.width = "40%"
            }, 100);
        }
    }
    function LinkLocal(){
        if(local() > 0 && local() < 65536){
            window.open(`http://localhost:${local()}`,'_blank')
        }else{
            toast.custom((t)=>(
            <div>
                <div class="tt">
                    <h1 class="white">white</h1>
                    <p>{t.visible?'show' :'Closing......' }</p>
                    <button onClick={()=> toast.dismiss(t.id)}>close</button>
                </div>
            </div>),{
                unmountDelay:1000,
            })
        }
    }
    function localKey(event: any){
        if(event.key === 'e' || event.key === '-'){
            event.preventDefault();
        }
        if (event.key === 'Enter') {
            LinkLocal();
        }
    }
    function handleKeyDown(event: any) {
        if (event.key === ' ') {
            const  partOne = document.getElementById('one') as HTMLElement;
            if(partOne.style.width === 'calc(100vw - 30px)'){
                Actionnd();
            }else if(partOne.style.width === '40%'){
                Actionst();
            }
        }
        function FastKey(key : string , link : string){
            if (event.key === key){
                window.open(link,'_blank')
            }
        }
        const FirstMat = document.getElementById('one') as HTMLElement ;
        const Check = FirstMat.style.width;
        if ( Check !="calc(100vw - 30px)" && Check != "calc(40%)"){
            FastKey('y', 'https://www.youtube.com/');
            FastKey('Y', 'https://www.youtube.com/');
            FastKey('f', 'https://www.facebook.com/')
            FastKey('F', 'https://www.facebook.com/')
            FastKey('g', 'https://www.github.com/')
            FastKey('G', 'https://www.github.com/') 
            FastKey('t', 'https://www.tinkercad.com/')
            FastKey('T', 'https://www.tinkercad.com/')
            FastKey('C', 'https://chat.openai.com/chat')
            FastKey('c', 'https://chat.openai.com/chat')
        }
        const Info = document.getElementById('info') as HTMLElement ;
        if (event.key === 'i' && Check != "calc(40%)"){
            Info.style.left = '0px'
        }
        if (event.key === 'q' && Check != "calc(40%)"){
            Info.style.left = '-70vw'
        }
    }
    function changeColor(){
        const Change = document.getElementById('btn') as HTMLElement;
        Change.style.backgroundColor = 'red'
        setTimeout(() => {
            Change.style.backgroundColor = 'black'
        }, 700);
        toast.success('Successfully copied ReactTS')
    }
  return (
    <div class="mp" onKeyDown={handleKeyDown} tabIndex={0}>
        <div class="one" id='one' onClick={Actionst} >
            <img src={plogo} class="circle" alt="" />
            <img src={logo} alt="" />
            <input type="number" placeholder='localhost : > 1 && < 65536' onInput={(e)=>{setLocal(parseInt(e.currentTarget.value))}} onKeyDown={localKey} id="local-input"/>
        <button class='eXPLORE' onClick={LinkLocal}>Explore</button>
        </div>
        <div class="two" onClick={Actionnd} id="two">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
        </svg>
        </div>
        <div class="three" id='three'>
            <div class="search">
                <input 
                    type="text" 
                    onInput={(e)=>setGoog(e.currentTarget.value)} 
                    placeholder="Google Search"
                    onKeyDown={googleKey}
                />
                <a href={`https://www.google.com/search?q=${goog()}` } target="_blank" rel="noreferrer" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </a>
            </div>
            <div class="con">
                <div class="row">
                    <div class="col">
                        <div class="el">
                            <img src={github} alt="" />
                            <a href="https://www.github.com" target='_blank'>Github</a>
                        </div>
                        <div class="el">
                            <img src={mongo} alt="" />
                            <a href="https://cloud.mongodb.com/v2/63a98796b8cb1b5314b0fb3f#/clusters" target="_blank">MongoDB</a>
                        </div>
                        <div class="el">
                            <img src={gpt} alt="" />
                            <a href="https://chat.openai.com/cha" target={'_blank'}>ChatGPT</a>
                        </div>
                        <div class="el">
                            <img src={vx} alt="" />
                            <a href="https://www.vx-underground.org/" target={'_blank'}>VX</a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="el">
                        <img src={rust} alt="" />
                            <a href="https://lib.rs/" target={'_blank'}>Rust-LIb</a>
                        </div>
                        <div class="el">
                        <img src={npm} alt="" />
                            <a href="https://www.npmjs.com/" target={'_blank'}>NPM</a>
                        </div>
                        <div class="el">
                        <img src={cc} alt="" />
                            <a href="https://www.wolframalpha.com/" target={'_blank'}>Calculater</a>
                        </div>
                        <div class="el">
                        <img src={tc} alt="" />
                            <a href="https://www.tinkercad.com/" target={'_blank'}>ThinkerCAD</a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="el">
                            <img src={tf} alt="" />
                            <a href="https://www.tensorflow.org/" target={'_blank'}>Tensorflow</a>
                        </div>
                        <div class="el">
                            <img src={gd} alt="" />
                            <a href="https://drive.google.com/drive/" target={'_blank'}>Google Drive</a>
                        </div>
                        <div class="el">
                            <img src={od} alt="" />
                            <a href="https://onedrive.live.com/?id=root&cid=B0B0CC414752522B" target={'_blank'}>oneDrive</a>
                        </div> 
                        <div class="el">
                            <img src={ms} alt="" />
                            <a href="https://www.office.com/?auth=1" target={'_blank'}>MS Office</a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="el">
                            <img src={yt} alt="" />
                            <a href="https://www.youtube.com/" target="_blank">Youtube</a>
                        </div>
                        <div class="el">
                            <img src={fb} alt="" />
                            <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                        </div>
                        <div class="el">
                            <img src={rm} alt="" />
                            <a href="https://www.remove.bg/" target="_blank">RemoveBG</a>
                        </div>
                        <div class="el">
                        <img src={ps} alt="" />
                            <a href="https://www.photopea.com/">imgEditer</a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="el">
                            <img src={calc} alt="" />
                            <a href="https://app.clipchamp.com/" target={'_blank'}>Clipcamp</a>
                        </div>
                        <div class="el">
                        <img src={ct} alt="" />
                            <a href="https://cleantechnica.com/" target={'_blank'}>CleanTech</a>
                        </div>
                        <div class="el">
                        <img src={nf} alt="" />
                            <a href="https://www.netlify.com/">Netlify</a>
                        </div>
                        <div class="el">
                        <img src={dose} alt="" />
                            <a href="">DosE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copy">
                <div class="mini">
                    <div class="cp">
                        <p>ReactTS npx</p>
                        <button id='btn' onClick={changeColor}>Copy</button>
                    </div>
                    <div class="cp">
                        <p>NextTS npx</p>
                        <button>Copy</button>
                    </div>
                    <div class="cp">
                        <p>NestJS</p>
                        <button>Copy</button>
                    </div>
                    <div class="cp">
                        <p>Rust-Server</p>
                        <button>Copy</button>
                    </div>
                </div>
                <div class="mini">
                    <div class="cp">
                        <p>ReactTS npm</p>
                        <button>Copy</button>
                    </div>
                    <div class="cp">
                        <p>NextTS npm</p>
                        <button>Copy</button>
                    </div>
                    <div class="cp">
                        <p>ExpressJS npm</p>
                        <button>Copy</button>
                    </div>
                    <div class="cp">
                        <p>Rust ML</p>
                        <button>Copy</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="info" id='info'>
            <h1>คีย์ลัด</h1>
            <table>
                <thead>
                    <tr>
                    <th>ปุ่ม</th>
                    <th>route</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <th>y,Y</th>
                    <th>youtube</th>
                    </tr>
                    <tr>
                    <th>f,F</th>
                    <th>Facebook</th>
                    </tr>
                    <tr>
                    <th>c,C</th>
                    <th>ChatGPT</th>
                    </tr>
                    <tr>
                    <th>g,G</th>
                    <th>Github</th>
                    </tr>
                    <tr>
                    <th>t,T</th>
                    <th>ThinkerCad</th>
                    </tr>
                    <tr>
                    <th>i</th>
                    <th>info</th>
                    </tr>
                    <tr>
                    <th>q</th>
                    <th>quit info</th>
                    </tr>
                    <tr>
                    <th>S,s</th>
                    <th>fast search</th>
                    </tr>
                    <tr>
                    <th>q</th>
                    <th>quit info</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MainPage