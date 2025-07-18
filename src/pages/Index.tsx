import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);

  const quotes = [
    "Лучше меньше, да лучше",
    "Учиться, учиться и учиться",
    "Революция — это праздник угнетенных",
    "Коммунизм — это советская власть плюс электрификация всей страны",
    "Капля камень точит",
    "Работать надо не 12 часов, а головой",
    "Доверяй, но проверяй",
    "Терпение и труд всё перетрут"
  ];

  const achievements = [
    {
      title: "Октябрьская революция",
      description: "Руководство революционными событиями 1917 года",
      year: "1917"
    },
    {
      title: "Создание СССР",
      description: "Формирование первого в мире социалистического государства",
      year: "1922"
    },
    {
      title: "Новая экономическая политика",
      description: "Введение НЭПа для восстановления экономики",
      year: "1921"
    },
    {
      title: "План ГОЭЛРО",
      description: "Первый в мире план государственной электрификации",
      year: "1920"
    }
  ];

  const filteredQuotes = quotes.filter(quote =>
    quote.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-memorial-dark to-gray-900">
      {/* Header */}
      <header className="bg-memorial-dark/95 backdrop-blur-sm border-b border-memorial-red/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Star" className="text-memorial-gold" size={24} />
              <h1 className="text-xl font-serif text-white">Мемориал В.И. Ленина</h1>
            </div>
            <nav className="flex space-x-6">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Главная
              </Button>
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Память
              </Button>
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Цитаты
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-serif text-white leading-tight">
                  Владимир Ильич
                  <span className="block text-memorial-gold">Ленин</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  1870 — 1924
                </p>
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                  Революционер, политический деятель, теоретик марксизма, 
                  создатель первого в мире социалистического государства
                </p>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-memorial-red hover:bg-memorial-red/90 text-white px-8 py-3">
                  Изучить биографию
                </Button>
                <Button variant="outline" className="border-memorial-gold text-memorial-gold hover:bg-memorial-gold/10">
                  Читать цитаты
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-memorial-gold/20 to-memorial-red/20 rounded-2xl p-8 backdrop-blur-sm">
                <img 
                  src="/img/20cb2772-f899-40f9-ab8d-583c03f4e802.jpg" 
                  alt="Портрет В.И. Ленина"
                  className="w-full h-96 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-memorial-dark/60 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Section */}
      <section className="py-20 px-6 bg-memorial-dark/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Icon name="Heart" className="text-memorial-red mx-auto mb-4" size={32} />
            <h2 className="text-4xl font-serif text-white mb-4">Память</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Вечная память великому революционеру и строителю нового мира
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-memorial-dark/30 border-memorial-gold/20 hover:border-memorial-gold/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Calendar" className="text-memorial-gold" size={20} />
                    <span className="text-memorial-gold font-semibold">{achievement.year}</span>
                  </div>
                  <CardTitle className="text-white font-serif text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Icon name="Quote" className="text-memorial-gold mx-auto mb-4" size={32} />
            <h2 className="text-4xl font-serif text-white mb-4">Цитаты и высказывания</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Мудрые слова великого мыслителя и революционера
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Input
                  placeholder="Поиск по цитатам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-memorial-dark/30 border-memorial-gold/20 text-white placeholder-gray-500"
                />
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-memorial-gold" size={16} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredQuotes.map((quote, index) => (
                <Card 
                  key={index} 
                  className={`bg-memorial-dark/30 border-memorial-gold/20 hover:border-memorial-gold/40 transition-all duration-300 cursor-pointer ${
                    selectedQuote === quote ? 'ring-2 ring-memorial-gold' : ''
                  }`}
                  onClick={() => setSelectedQuote(selectedQuote === quote ? null : quote)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Icon name="Quote" className="text-memorial-gold mt-1 flex-shrink-0" size={20} />
                      <div>
                        <blockquote className="text-white font-serif text-lg leading-relaxed">
                          "{quote}"
                        </blockquote>
                        <cite className="text-memorial-gold mt-2 block text-sm">
                          — В.И. Ленин
                        </cite>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredQuotes.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" className="text-memorial-gray mx-auto mb-4" size={48} />
                <p className="text-gray-400 text-lg">Цитаты не найдены</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-memorial-dark border-t border-memorial-red/20 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Icon name="Star" className="text-memorial-gold" size={20} />
              <span className="text-white font-serif">Мемориал В.И. Ленина</span>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                О проекте
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Контакты
              </Button>
            </div>
          </div>
          <Separator className="my-6 bg-memorial-red/20" />
          <div className="text-center text-gray-500 text-sm">
            © 2024 Мемориал В.И. Ленина. Вечная память.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;