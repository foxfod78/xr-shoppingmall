"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Cable as Cube, Users, Zap, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react"

const caseUrls: Record<string, string> = {
  "럭키드로우 티파니앤코x에어포스 1": "https://elypecs.com/space/fh0irlvexccd7du9",
  "펩시 팝업스토어": "https://elypecs.com/platform/ES0188/index.html",
  "비스포크 홈메타": "https://bespokedev.olimcloud.com/intro",
  "제철장터 팝업스토어": "https://elypecs.com/platform/ES0132/index.html",
  "SH 머트리얼 전시관": "https://elypecs.com/platform/ZE208/hall_material.html?cache=true",
  "코카콜라 디지털 팝업": "https://elypecs.com/platform/coke/lotteon/index.html",
  "이니스프리 메타 허브": "https://theislehub.com/",
  "이노블록 3D 전시관": "https://inoblock3d.com/",
  CJ온스타일: "https://elypecs.com/platform/ES0240/index.html",
}

const carouselCases = [
  {
    title: "럭키드로우 티파니앤코x에어포스 1",
    image: "https://warehouse.olimplanet.com/elypecs-lab/portfolio/new/new-img-luckyDraw.png",
    description: "공간 내 숨은 소품 찾기 미니게임 이벤트",
  },
  {
    title: "펩시 팝업스토어",
    image: "https://warehouse.olimplanet.com/elypecs-lab/portfolio/popup/img-popupstore-02-mov.gif",
    description: "신제품 3D 모델과 브랜드 체험",
  },
  {
    title: "비스포크 홈메타",
    image: "https://warehouse.olimplanet.com/elypecs-lab/portfolio/showroom/img-showroom-01-mov.gif",
    description: "가상쇼룸을 통한 가전과 인테리어 조화 확인",
  },
  {
    title: "이니스프리 메타 허브",
    image: "https://warehouse.olimplanet.com/elypecs-lab/portfolio/popup/img-popupstore-03-mov.gif",
    description: "몰입형 뷰티 브랜드 경험",
  },
  {
    title: "코카콜라 디지털 팝업",
    image: "https://warehouse.olimplanet.com/elypecs-lab/portfolio/popup/img-popupstore-01-mov.gif",
    description: "뉴진스 콜라보와 디지털 굿즈 체험",
  },
]

const benefitCarouselData = [
  {
    image: "/carousel-image-1.png",
    title: "광고 콘텐츠 활용",
    description: "비주얼 이미지, 영상 등 추가 제공하는 콘텐츠를 광고 소재로 적극 활용하세요",
  },
  {
    image: "/carousel-image-2.png",
    title: "다국어 콘텐츠로 글로벌하게",
    description: "다국어로 지원되는 AI휴먼, TTS, 화상채팅을 활용해 해외바이어와 손쉽게 소통하세요",
  },
  {
    image: "/carousel-image-3.png",
    title: "생동감 넘치는 이벤트 프로모션",
    description: "인증사진, 굿즈판매, 이벤트 등 참여형 콘텐츠를 활용해 고객의 피드백을 기대해보세요",
  },
  {
    image: "/carousel-image-4.png",
    title: "한눈에 보는 분석 데이터",
    description: "유입된 고객 경험을 놓치지 말고 비즈니스 개선을 위한 인사이트로 활용하세요",
  },
]

export default function XRPopupStorePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentUrl, setCurrentUrl] = useState("")
  const [currentTitle, setCurrentTitle] = useState("")
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [benefitCurrentSlide, setBenefitCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselCases.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setBenefitCurrentSlide((prev) => (prev + 1) % benefitCarouselData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const openModal = (title: string) => {
    const url = caseUrls[title]
    if (url) {
      setCurrentUrl(url)
      setCurrentTitle(title)
      setIsModalOpen(true)
      document.body.style.overflow = "hidden" // 배경 스크롤 방지
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentUrl("")
    setCurrentTitle("")
    document.body.style.overflow = "unset" // 배경 스크롤 복원
  }

  const openContactModal = () => {
    setIsContactModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
    document.body.style.overflow = "unset"
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselCases.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselCases.length) % carouselCases.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextBenefitSlide = () => {
    setBenefitCurrentSlide((prev) => (prev + 1) % benefitCarouselData.length)
  }

  const prevBenefitSlide = () => {
    setBenefitCurrentSlide((prev) => (prev - 1 + benefitCarouselData.length) % benefitCarouselData.length)
  }

  const goToBenefitSlide = (index: number) => {
    setBenefitCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a
              href="https://xroo.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/xroo-logo.png" alt="XROO" className="h-12" />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="https://biz.xroo.io/work"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              도입사례
            </a>
            <button
              onClick={openContactModal}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              문의하기
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full border border-primary">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-white">혁신적인 XR 기술</span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold text-balance leading-tight">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    쇼핑의 장면을 바꾸다
                  </span>
                  <br />
                  <span className="text-foreground">XR 쇼핑몰</span>
                </h1>

                <div className="space-y-4 text-xl text-muted-foreground">
                  <p className="text-2xl font-medium text-foreground">
                    🛒 클릭 대신 체험으로 구매를 이끄는 실감형 커머스
                  </p>
                  <p>3D · AR · 가상 전시로 전환율을 높이는 쇼핑몰</p>
                  <p className="font-semibold text-foreground text-xl">
                    브랜드의 제품을 손안의 3D·AR 체험으로. 웹/모바일/VR 어디서든 몰입형 구매 여정을 설계합니다
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  onClick={openContactModal}
                  className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  문의하기
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>

                {/* 캐러셀 컨테이너 */}
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  {/* 메인 이미지 */}
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => openModal(carouselCases[currentSlide].title)}
                  >
                    <img
                      src={carouselCases[currentSlide].image || "/placeholder.svg"}
                      alt={carouselCases[currentSlide].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 text-white">{carouselCases[currentSlide].title}</h3>
                      <p className="text-sm text-white/90">{carouselCases[currentSlide].description}</p>
                    </div>

                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity border border-white/30">
                      클릭하여 체험하기
                    </div>
                  </div>

                  {/* 네비게이션 버튼 */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* 인디케이터 */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {carouselCases.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                  실시간 체험 가능
                </div>
                <div className="absolute bottom-2 left-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  3D 몰입형 경험
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 rounded-full border border-red-500">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white">현재 이커머스의 한계</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-balance">
              <span className="text-foreground">왜 지금</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                XR 쇼핑몰인가?
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* 문제점 이미지 */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 p-8 border-2 border-red-100">
                <img
                  src="/frustrated-customer-looking-at-small-product-photo.jpg"
                  alt="기존 이커머스의 한계를 보여주는 이미지"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  기존 방식의 한계
                </div>
              </div>
            </div>

            {/* 문제점 설명 */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-red-600">현재 이커머스의 문제점</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-red-50 rounded-xl border border-red-100">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">제한적인 제품 정보 전달</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        사진과 텍스트만으로는 제품의 <strong>크기·질감·사용 장면</strong>을 전달하기 어렵습니다.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-red-50 rounded-xl border border-red-100">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">장바구니 이탈의 핵심 원인</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-red-600">상상 격차</strong> (What you see ≠ What you get)로 인한 구매
                        망설임
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 해결책 설명 */}
            <div className="space-y-8 lg:order-1">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-primary">XR 쇼핑몰의 해결책</h3>

                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <p className="text-xl leading-relaxed">
                    <strong className="text-foreground">XR(3D/AR/VR)</strong>은 사용자의 상상 격차를 해소하고,
                    <br />
                    <strong>비교·확신·결제</strong>를 빠르게 돕습니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-primary mb-4">효과 포인트</h4>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl border border-primary/20">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg mb-2">제품 이해도 향상</h5>
                        <p className="text-muted-foreground">문의·반품 감소 가능</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl border border-primary/20">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg mb-2">체류시간·페이지 상호작용 증가</h5>
                        <p className="text-muted-foreground">전환 퍼널 상단 활성화</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl border border-primary/20">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg mb-2">콘텐츠 자산(3D/AR) 재활용성↑</h5>
                        <p className="text-muted-foreground">상세페이지·광고·팝업·전시·교육에 재사용</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 해결책 이미지 */}
            <div className="relative lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-8 border-2 border-primary/20">
                <img
                  src="/happy-customer-using-ar-to-view-3d-product-model-o.jpg"
                  alt="XR 쇼핑몰의 3D/AR 체험을 보여주는 이미지"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  XR 쇼핑몰 솔루션
                </div>
                <div className="absolute bottom-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                  실시간 3D 체험
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-full border border-primary">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white">혁신적인 선택</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-balance">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                왜 XR 쇼핑몰인가?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              전 세계 브랜드들이 선택한 이유가 있습니다. <br />
              <span className="font-semibold text-foreground text-2xl">
                물리적 한계를 뛰어넘는 무한한 가능성을 경험하세요.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cube className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-3xl">
                  몰입감 있는 3D 환경
                </CardTitle>
                <CardDescription className="leading-relaxed text-lg">
                  실제 매장보다 더 생생한 3D 환경에서 제품을 자유롭게 체험하고 상호작용할 수 있습니다.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-3xl">글로벌 접근성</CardTitle>
                <CardDescription className="leading-relaxed text-lg">
                  시간과 공간의 제약 없이 전 세계 고객들이 동시에 접속하여 브랜드를 경험할 수 있습니다.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-3xl">빠른 구축 & 운영</CardTitle>
                <CardDescription className="leading-relaxed text-lg">
                  임대료와 인테리어 비용 없이 몇 주 만에 고품질 XR 쇼핑몰을 구축하고 즉시 운영할 수 있습니다.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* 추가 임팩트 요소 */}
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h3 className="font-semibold text-muted-foreground text-3xl">신뢰받는 글로벌 브랜드들의 선택</h3>
            <div className="flex justify-center">
              <img
                src="/client-logos.png"
                alt="코카콜라, 현대백화점, 이니스프리, 삼성, 로레알, KT 등 클라이언트 로고"
                className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">왜 XR 쇼핑몰을 선택해야 할까요?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              XR 쇼핑몰만의 특별한 장점들을 확인해보세요
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 캐러셀 이미지 */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>

                {/* 캐러셀 컨테이너 */}
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  {/* 메인 이미지 */}
                  <div className="relative w-full h-full">
                    <img
                      src={benefitCarouselData[benefitCurrentSlide].image || "/placeholder.svg"}
                      alt={benefitCarouselData[benefitCurrentSlide].title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* 네비게이션 버튼 */}
                  <button
                    onClick={prevBenefitSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextBenefitSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* 인디케이터 */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {benefitCarouselData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToBenefitSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === benefitCurrentSlide ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 텍스트 콘텐츠 */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-white">핵심 기능</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-balance">
                  {benefitCarouselData[benefitCurrentSlide].title}
                </h3>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {benefitCarouselData[benefitCurrentSlide].description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6"></div>

              <Button
                size="lg"
                onClick={openContactModal}
                className="w-full sm:w-auto text-lg px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground"
              >
                자세한 상담 받기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-balance"> 대표 사례 보기</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              다양한 브랜드들이 XR 쇼핑몰로 이룬 성과를 확인해보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 럭키드로우 티파니앤코x에어포스 1 */}
            <Card
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal("럭키드로우 티파니앤코x에어포스 1")}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/new/new-img-luckyDraw.png"
                  alt="럭키드로우 티파니앤코x에어포스 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/new/new-logo-luckyDraw.png"
                    alt="럭키드로우 로고"
                    className="w-8 h-8 object-contain"
                  />
                  <Badge variant="outline">이벤트</Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                  럭키드로우 티파니앤코x에어포스 1
                </CardTitle>
                <CardDescription className="mb-4">
                  럭키드로우와 함께 진행한 협업프로젝트로, 공간 내 숨은 소품 찾기 미니게임으로 이벤트 진행에 활용한 사례
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            {/* 펩시 팝업스토어 */}
            <Card
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal("펩시 팝업스토어")}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/popup/img-popupstore-02-mov.gif"
                  alt="펩시 팝업스토어"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/popup/logo-popupstore-02.png"
                    alt="펩시 로고"
                    className="w-8 h-8 object-contain"
                  />
                  <Badge variant="outline">음료 브랜드</Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">펩시 팝업스토어</CardTitle>
                <CardDescription className="mb-4">
                  온라인 팝업스토어에서 신제품 3D 모델로 시각적 이미지 전달, 제품 구매 연결, 신제품 이벤트 응모, 브랜드
                  행사 홍보를 경험하고, 11번가 이벤트를 통해 디지털 팝업 소개와 이벤트 진행에 활용한 사례
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            {/* 비스포크 홈메타 */}
            <Card
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal("비스포크 홈메타")}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/showroom/img-showroom-01-mov.gif"
                  alt="비스포크 홈메타"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/showroom/logo-showroom-01.png"
                    alt="삼성전자 로고"
                    className="w-8 h-8 object-contain"
                  />
                  <Badge variant="outline">가전 브랜드</Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">비스포크 홈메타</CardTitle>
                <CardDescription className="mb-4">
                  가상쇼룸을 통해 비스포크 가전과 자택 인테리어의 조화를 확인하여 구매 의사결정 도움 Web 환경에서 제품
                  정보 확인, 고객 체험, 구매, 매장 방문까지 연결되며, 매장에서 제품 체험
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            {/* 제철장터 팝업스토어 */}
            <Card
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal("제철장터 팝업스토어")}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/popup/img-popupstore-09.png"
                  alt="제철장터 팝업스토어"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/popup/logo-popupstore-09.png"
                    alt="제철장터 로고"
                    className="w-8 h-8 object-contain"
                  />
                  <Badge variant="outline">식품 유통</Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">제철장터 팝업스토어</CardTitle>
                <CardDescription className="mb-4">
                  제철장터는 산지와 소비자를 연결해 전국 각지의 신선한 먹거리를 중간 유통 과정 없이 식탁에서 바로 만날
                  볼 수 있는 서비스를 제공
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            {/* SH 머트리얼 전시관 */}
            <Card
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal("SH 머트리얼 전시관")}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/new/new-img-sh.png"
                  alt="SH 머트리얼 전시관"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/new/new-logo-sh.png"
                    alt="SH서울주택도시공사 로고"
                    className="w-8 h-8 object-contain"
                  />
                  <Badge variant="outline">공공기관</Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">SH 머트리얼 전시관</CardTitle>
                <CardDescription className="mb-4">
                  서울주택도시공사의 표준 스펙북을 XR시뮬레이터로 제작하여 원하는 부분에 스펙북 마감재를 적용해보며
                  고품질 및 고성능 주택을 공급하고자 하는 SH의 백년주택 건설 초석을 제공
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            {/* 코카콜라 디지털 팝업 */}
            <Card
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal("코카콜라 디지털 팝업")}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/popup/img-popupstore-01-mov.gif"
                  alt="코카콜라 디지털 팝업"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/popup/logo-popupstore-01.png"
                    alt="코카콜라 로고"
                    className="w-8 h-8 object-contain"
                  />
                  <Badge variant="outline">음료 브랜드</Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">코카콜라 디지털 팝업</CardTitle>
                <CardDescription className="mb-4">
                  디지털 팝업스토어에서 소비자는 굿즈를 응모하고, 뉴진스의 주제곡과 화보를 만나고, 역사가 담긴 보틀을
                  체험. 11번가/롯데온 라이브커머스를 통해 디지털 팝업 소개와 이벤트 진행에 활용한 사례
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            {/* 이니스프리 메타 허브 */}
            <Card
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal("이니스프리 메타 허브")}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/popup/img-popupstore-03-mov.gif"
                  alt="이니스프리 메타 허브"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/popup/logo-popupstore-03.png"
                    alt="이니스프리 로고"
                    className="w-8 h-8 object-contain"
                  />
                  <Badge variant="outline">뷰티 브랜드</Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">이니스프리 메타 허브</CardTitle>
                <CardDescription className="mb-4">
                  공간이 전달하는 신비로움과 INNISFREE의 몰입형 미션은 뛰어난 사실감과 글로벌 고객을 위한 웹 접근성을
                  갖추어 브랜드에 대한 몰입감을 높이는 이벤트 경험
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            {/* 이노블록 3D 전시관 */}
            <Card
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal("이노블록 3D 전시관")}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/showroom/img-showroom-10.png"
                  alt="이노블록 3D 전시관"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/showroom/logo-showroom-10.png"
                    alt="이노블록 로고"
                    className="w-8 h-8 object-contain"
                  />
                  <Badge variant="outline">건설 자재</Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">이노블록 3D 전시관</CardTitle>
                <CardDescription className="mb-4">
                  이노블록의 각종 타일들을 XR가상공간에서 직접 변경, 다양한 바닥재 타일, 옹벽 타일 등을 쉽게 확인
                  가능하며, 제품정보 및 선택한 제품의 견적까지 한번에 확인 가능한 사례
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            {/* CJ온스타일 */}
            <Card
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal("CJ온스타일")}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/new/new-img-cjOnStyle.png"
                  alt="CJ온스타일"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://warehouse.olimplanet.com/elypecs-lab/portfolio/new/new-logo-cjOnStyle.png"
                    alt="CJ온스타일 로고"
                    className="w-8 h-8 object-contain"
                  />
                  <Badge variant="outline">쇼핑몰</Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">CJ온스타일</CardTitle>
                <CardDescription className="mb-4">
                  매주 브랜드 기획전 맞춤 공간으로 업데이트 되는 위클리 팝업스토어로 CJ 온스타일 앱에서 확인할 수 있고
                  다양한 퀴즈 이벤트까지 진행한 앱 프로모션 사례
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-balance">지금 바로 XR 쇼핑몰을 시작해보세요</h2>
            <p className="text-xl opacity-90 text-balance">
              전문 컨설팅부터 구축, 운영까지 모든 과정을 XROO가 함께합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" onClick={openContactModal}>
                무료 상담 신청
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4"></div>

            <div className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li></li>

                <li></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-muted-foreground">ⓒ 2025 XROO 엑스루. all rights reserved.</p>
          </div>
        </div>
      </footer>

      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full h-[80vh] max-h-[600px]">
            {/* 닫기 버튼 */}
            <button
              onClick={closeContactModal}
              className="absolute top-4 right-4 z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* iframe */}
            <iframe
              src="https://orv27bnqzk7.typeform.com/to/kKTXazu8#route=single_shopping"
              title="문의하기"
              className="w-full h-full border-0 rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative w-full h-full bg-white">
            {/* 닫기 버튼 */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="닫기"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* iframe */}
            <iframe
              src={currentUrl}
              title={currentTitle}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}
