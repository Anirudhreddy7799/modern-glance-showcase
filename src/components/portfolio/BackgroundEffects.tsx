const BackgroundEffects = () => {
  return (
    <>
      {/* Modern gradient overlay with reduced opacity */}
      <div className="absolute inset-0" style={{
        background: `
          linear-gradient(
            45deg,
            #FF6B6B 0%,
            #4ECDC4 17%,
            #45B7D1 34%,
            #96C93D 51%,
            #FED766 68%,
            #7F78D2 85%,
            #FF69B4 100%
          )
        `,
        opacity: 0.85,
      }}></div>
      
      {/* Vector art background patterns with increased opacity */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          animation: 'patternMove 20s linear infinite',
          transform: 'perspective(1000px) rotateX(30deg)',
        }}
      />
      
      {/* 3D geometric patterns with increased opacity */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23ffffff' stroke-width='0.5' fill='none' transform='rotate3d(1, 1, 1, 45deg)'%3E%3Ccube x='20' y='20' width='60' height='60' depth='60'%3E%3Canimate attributeName='transform' attributeType='XML' type='rotate' from='0 50 50' to='360 50 50' dur='10s' repeatCount='indefinite'/%3E%3C/cube%3E%3Csphere cx='50' cy='50' r='25'%3E%3Canimate attributeName='r' values='20;30;20' dur='3s' repeatCount='indefinite'/%3E%3C/sphere%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          animation: 'patternMove 30s linear infinite reverse',
          transform: 'perspective(1000px) rotateY(20deg)',
        }}
      />

      {/* Enhanced 3D shapes and movements with increased opacity */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23ffffff' stroke-width='0.5' fill='none'%3E%3Ccircle cx='50' cy='50' r='30'%3E%3Canimate attributeName='r' from='20' to='40' dur='4s' repeatCount='indefinite'/%3E%3Canimate attributeName='transform' type='rotate' from='0 50 50' to='360 50 50' dur='8s' repeatCount='indefinite'/%3E%3C/circle%3E%3Cpolygon points='20,20 80,20 80,80 20,80'%3E%3Canimate attributeName='points' dur='7s' repeatCount='indefinite' values='20,20 80,20 80,80 20,80;40,10 90,40 60,90 10,60;20,20 80,20 80,80 20,80'/%3E%3Canimate attributeName='transform' type='rotate' from='0 50 50' to='-360 50 50' dur='12s' repeatCount='indefinite'/%3E%3C/polygon%3E%3Cpath d='M10,30 Q50,10 90,30 T90,70'%3E%3Canimate attributeName='d' dur='5s' repeatCount='indefinite' values='M10,30 Q50,10 90,30 T90,70;M10,50 Q50,70 90,50 T90,30;M10,30 Q50,10 90,30 T90,70'/%3E%3Canimate attributeName='transform' type='translate' values='0,0;0,10;0,0' dur='3s' repeatCount='indefinite'/%3E%3C/path%3E%3Cline x1='0' y1='0' x2='100' y2='100'%3E%3Canimate attributeName='x2' dur='3s' repeatCount='indefinite' values='100;0;100'/%3E%3Canimate attributeName='y2' dur='3s' repeatCount='indefinite' values='100;0;100'/%3E%3Canimate attributeName='transform' type='rotate' from='0 50 50' to='360 50 50' dur='6s' repeatCount='indefinite'/%3E%3C/line%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          animation: 'patternMove 40s linear infinite',
          transform: 'perspective(1000px) rotateX(15deg) rotateY(15deg)',
        }}
      />
    </>
  );
};

export default BackgroundEffects;