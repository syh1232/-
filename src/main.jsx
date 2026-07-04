import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import MagicRings from './MagicRings';
import ElectricBorder from './ElectricBorder';
import { initPortfolioAnimations } from './animations';
import './styles.css';

const projects = [
  {
    title: '美丽黄浦邮票设计',
    meta: '视觉设计 / 城市文化 / 2025.06',
    image: '/assets/huangpu-stamps.jpg',
    desc: '围绕上海黄浦区城市文化形象，提取海关大楼、豫园、玉兰花等元素，完成系列邮票主视觉、配色系统与组合展示。',
    tags: ['城市视觉', '插画构图', '版式延展'],
  },
  {
    title: '高智长者智慧康养伴侣',
    meta: '文创产品 / 康养设计 / 2026.04-06',
    image: '/assets/memory-care.png',
    desc: '面向老年群体的智能健康陪伴设备概念，围绕活动记录、健康监测与高光时刻整理构建产品形态和展示场景。',
    tags: ['用户调研', '产品概念', '展示海报'],
  },
  {
    title: '额济纳拼图文创礼盒',
    meta: '文旅文创 / 礼盒设计',
    image: '/assets/ejina-gift.jpg',
    desc: '以地域文化和旅行记忆为核心，探索拼图、包装与礼盒系统的组合表达，形成具备纪念属性的文创方案。',
    tags: ['文旅叙事', '包装系统', '产品展示'],
  },
  {
    title: '手绘与概念草图',
    meta: '手绘表达 / 造型训练',
    image: '/assets/sketch-study.jpg',
    gallery: [
      '/assets/sketch-study.jpg',
      '/assets/sketch-patterns.jpg',
      '/assets/sketch-architecture.jpg',
      '/assets/sketch-structure.jpg',
    ],
    desc: '通过手绘草图和概念图训练观察、结构、造型与视觉表达能力，为后续 UI、IP、产品概念提供前期表达基础。',
    tags: ['草图表达', '造型基础', '概念推演'],
  },
];

const strengths = [
  ['视觉整合', '能将城市文化、传统元素与现代视觉语言结合，形成统一的画面系统。'],
  ['交互意识', '学习 UI 与交互设计，关注信息层级、使用路径和界面体验的基础逻辑。'],
  ['产品表达', '具备从用户需求、概念草图到展示海报的基础产品设计表达能力。'],
  ['工具适应', '熟悉 Photoshop、Illustrator、Figma，并能结合 Blender、Rhino 与 AI 工具辅助创作。'],
];

function App() {
  useEffect(() => initPortfolioAnimations(), []);

  return (
    <main>
      <div className="openingCurtain" aria-hidden="true" />
      <div className="siteMagicBackground" aria-hidden="true">
        <MagicRings
          color="#940e20"
          colorTwo="#1a64ed"
          ringCount={7}
          speed={0.72}
          attenuation={8}
          lineThickness={1.35}
          baseRadius={0.2}
          radiusStep={0.09}
          scaleRate={0.09}
          opacity={0.72}
          blur={0}
          noiseAmount={0.035}
          rotation={-18}
          ringGap={1.46}
          fadeIn={0.72}
          fadeOut={0.52}
          followMouse={false}
          parallax={0.02}
        />
      </div>
      <Hero />
      <Experience />
      <Projects />
      <Strengths />
      <Contact />
    </main>
  );
}

function Hero() {
  const videoRef = useGeneratedVideo();
  const isNavFloating = useFloatingNav();

  return (
    <section className="hero" id="top">
      <div className="videoShell" aria-hidden="true">
        <video ref={videoRef} className="heroVideo" autoPlay muted loop playsInline poster="/assets/hero-poster.jpg" />
        <div className="motionFallback" />
      </div>
      <div className="heroGeometry" aria-hidden="true">
        <span className="geoCircle" />
        <span className="geoSlab teal" />
        <span className="geoSlab black" />
        <span className="geoSlab redOne" />
        <span className="geoSlab redTwo" />
        <span className="geoSlab redThree" />
      </div>
      <nav className={`nav ${isNavFloating ? 'isFloating' : ''}`}>
        <div className="navGlass">
          <a href="#top" className="brand">SYH.PORTFOLIO</a>
          <div className="navLinks">
            <a href="#profile">经历</a>
            <a href="#projects">项目</a>
            <a href="#strengths">优势</a>
            <a href="#contact">联系</a>
          </div>
          <a className="navCta" href="mailto:2579010691@qq.com">联系我</a>
        </div>
      </nav>
      <div className="heroInner">
        <div className="heroCopy">
          <p className="eyebrow">Shanghai Jian Qiao University · Art & Technology</p>
          <h1 className="heroTitle" aria-label="沈奕涵">
            <span className="titleMask"><span className="titleChar">沈</span></span>
            <span className="titleMask"><span className="titleChar">奕</span></span>
            <span className="titleMask"><span className="titleChar">涵</span></span>
          </h1>
          <p className="heroLead">
            23级艺术与科技学生，正在寻找视觉设计、交互设计、UI设计、新媒体设计与文创产品设计方向实习。
          </p>
          <div className="heroActions">
            <a href="#projects" className="primaryBtn">查看作品</a>
            <a href="tel:17321265608" className="ghostBtn">173 2126 5608</a>
          </div>
        </div>
        <p className="heroSideLabel">PORTFOLIO · 2026</p>
      </div>
      <div className="heroStats" aria-label="作品集概览">
        <span><strong>04</strong>精选作品</span>
        <span><strong>06+</strong>设计技能</span>
        <span><strong>2023</strong>入学年级</span>
      </div>
    </section>
  );
}

function useFloatingNav() {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsFloating(window.scrollY > window.innerHeight - 120);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return isFloating;
}

function useGeneratedVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const video = videoRef.current;
    let frame = 0;
    let animationId;

    const resize = () => {
      canvas.width = 1280;
      canvas.height = 720;
    };

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      frame += 0.008;
      context.fillStyle = '#05070b';
      context.fillRect(0, 0, width, height);

      const gradient = context.createRadialGradient(
        width * (0.24 + Math.sin(frame) * 0.06),
        height * (0.42 + Math.cos(frame * 0.8) * 0.08),
        20,
        width * 0.46,
        height * 0.44,
        width * 0.78,
      );
      gradient.addColorStop(0, 'rgba(61, 215, 255, 0.32)');
      gradient.addColorStop(0.48, 'rgba(113, 104, 255, 0.18)');
      gradient.addColorStop(1, 'rgba(5, 7, 11, 0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.strokeStyle = 'rgba(226, 244, 255, 0.08)';
      context.lineWidth = 1;
      for (let x = -80; x < width + 120; x += 64) {
        context.beginPath();
        context.moveTo(x + Math.sin(frame * 2 + x) * 18, 0);
        context.lineTo(x - 140 + Math.cos(frame + x) * 24, height);
        context.stroke();
      }

      for (let i = 0; i < 42; i += 1) {
        const x = (i * 143 + frame * 4200) % (width + 260) - 130;
        const y = height * (0.18 + ((i * 37) % 70) / 100);
        context.strokeStyle = `rgba(123, 223, 255, ${0.08 + (i % 5) * 0.018})`;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + 180 + (i % 7) * 24, y - 90 + (i % 9) * 18);
        context.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    if (canvas.captureStream && video) {
      resize();
      draw();
      video.srcObject = canvas.captureStream(30);
      video.play().catch(() => {});
    }

    return () => {
      cancelAnimationFrame(animationId);
      if (video?.srcObject) {
        video.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return videoRef;
}

function Experience() {
  return (
    <section className="section profile" id="profile">
      <div className="sectionHead">
        <p className="eyebrow">Profile</p>
        <h2>把文化元素转译成清晰、克制、有记忆点的视觉方案。</h2>
      </div>
      <ElectricBorder color="#600f26" speed={0.78} chaos={0.1} borderRadius={18} className="profileElectric">
        <div className="profileGrid">
          <figure className="portraitCard">
            <img src="/assets/avatar.jpg" alt="沈奕涵头像" />
            <figcaption>Art & Technology / Visual Design Intern</figcaption>
          </figure>
          <div className="profileText">
            <p>
              我是上海建桥学院 2023 级艺术与科技专业学生。关注视觉设计、UI 与交互、数字媒体和文创产品方向，能够完成从创意构思、草图表达到视觉呈现的基础设计流程。
            </p>
            <p>
              目前作品涵盖城市文化邮票视觉、沪剧主题 IP、智慧康养产品概念、文旅文创礼盒与手绘训练。希望进入真实项目环境，继续提升版式、视觉系统、用户体验和项目落地能力。
            </p>
            <div className="infoGrid">
              <span>上海市松江区</span>
              <a href="mailto:2579010691@qq.com">2579010691@qq.com</a>
              <a href="tel:17321265608">173 2126 5608</a>
              <span>求职城市：上海</span>
            </div>
          </div>
          <div className="dataPanel">
            <div><strong>Photoshop</strong><span>视觉修图与合成</span></div>
            <div><strong>Illustrator</strong><span>矢量图形与版式</span></div>
            <div><strong>Figma</strong><span>UI 原型与界面设计</span></div>
            <div><strong>Blender / Rhino</strong><span>三维建模基础</span></div>
          </div>
        </div>
      </ElectricBorder>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="sectionHead split">
        <div>
          <p className="eyebrow">Selected Works</p>
          <h2>精选项目</h2>
        </div>
        <p>以大图展示作品气质，后续可继续补充项目详情页、过程图、动效与完整作品集 PDF。</p>
      </div>
      <div className="projectGrid">
        {projects.map((project, index) => (
          <article className={`projectCard ${index % 2 ? 'reverse' : ''}`} key={project.title}>
            {project.gallery ? (
              <div className="projectGallery" aria-label={`${project.title}作品图`}>
                {project.gallery.map((image, galleryIndex) => (
                  <img src={image} alt={`${project.title} ${galleryIndex + 1}`} key={image} />
                ))}
              </div>
            ) : (
              <img src={project.image} alt={project.title} />
            )}
            <div className="projectOverlay">
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <p>{project.meta}</p>
              <h3>{project.title}</h3>
              <span>{project.desc}</span>
              <div className="tagRow">
                {project.tags.map((tag) => <em key={tag}>{tag}</em>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="section strengths" id="strengths">
      <div className="sectionHead">
        <p className="eyebrow">Advantages</p>
        <h2>个人优势</h2>
      </div>
      <div className="strengthGrid">
        {strengths.map(([title, text], index) => (
          <article className="strengthCard" key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contactInner">
        <p className="eyebrow">Contact</p>
        <h2>期待参与真实项目，把想法推进到可被看见的作品。</h2>
        <div className="contactLinks">
          <a href="mailto:2579010691@qq.com">2579010691@qq.com</a>
          <a href="tel:17321265608">173 2126 5608</a>
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
