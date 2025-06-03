import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Progress } from './components/ui/progress';
import { Trophy, Target, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<'messi' | 'ronaldo' | null>(null);

  const messiStats = {
    name: "Lionel Messi",
    nationality: "Argentina",
    position: "Forward",
    age: 37,
    goals: 850,
    assists: 377,
    matches: 1069,
    trophies: 44,
    ballonDor: 8,
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=500&fit=crop&crop=face",
    currentTeam: "Inter Miami",
    colors: {
      primary: "from-blue-600 to-red-500",
      secondary: "bg-blue-50 border-blue-200",
      accent: "text-blue-600"
    }
  };

  const ronaldoStats = {
    name: "Cristiano Ronaldo",
    nationality: "Portugal", 
    position: "Forward",
    age: 39,
    goals: 901,
    assists: 255,
    matches: 1237,
    trophies: 35,
    ballonDor: 5,
    image: "https://images.unsplash.com/photo-1594736797933-d0f9ee08e90b?w=400&h=500&fit=crop&crop=face",
    currentTeam: "Al Nassr",
    colors: {
      primary: "from-green-600 to-yellow-500",
      secondary: "bg-green-50 border-green-200",
      accent: "text-green-600"
    }
  };

  const achievements = {
    messi: [
      { year: "2009", title: "First Ballon d'Or", description: "Youngest to win at 22" },
      { year: "2015", title: "Champions League Treble", description: "With Barcelona" },
      { year: "2022", title: "World Cup Winner", description: "Argentina's first since 1986" },
      { year: "2023", title: "8th Ballon d'Or", description: "Record-breaking achievement" }
    ],
    ronaldo: [
      { year: "2008", title: "First Ballon d'Or", description: "At Manchester United" },
      { year: "2016", title: "Euro Champion", description: "Portugal's first major trophy" },
      { year: "2018", title: "Champions League Hat-trick", description: "3 consecutive wins with Real Madrid" },
      { year: "2023", title: "900+ Career Goals", description: "First player to reach milestone" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              GOAT
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                .
              </span>
              DEBATE
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              The ultimate comparison between two football legends who defined a generation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Messi Card */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPlayer(selectedPlayer === 'messi' ? null : 'messi')}
            >
              <Card className={`h-96 relative overflow-hidden transition-all duration-500 hover:scale-105 ${
                selectedPlayer === 'messi' ? 'ring-4 ring-blue-500 shadow-2xl shadow-blue-500/25' : 'hover:shadow-2xl'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${messiStats.colors.primary} opacity-90`}></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <CardContent className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <h2 className="text-4xl font-bold mb-2">{messiStats.name}</h2>
                    <p className="text-lg opacity-90">{messiStats.nationality} • {messiStats.currentTeam}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{messiStats.goals}</div>
                      <div className="text-sm opacity-80">Goals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">{messiStats.ballonDor}</div>
                      <div className="text-sm opacity-80">Ballon d'Or</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ronaldo Card */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPlayer(selectedPlayer === 'ronaldo' ? null : 'ronaldo')}
            >
              <Card className={`h-96 relative overflow-hidden transition-all duration-500 hover:scale-105 ${
                selectedPlayer === 'ronaldo' ? 'ring-4 ring-green-500 shadow-2xl shadow-green-500/25' : 'hover:shadow-2xl'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${ronaldoStats.colors.primary} opacity-90`}></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <CardContent className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <h2 className="text-4xl font-bold mb-2">{ronaldoStats.name}</h2>
                    <p className="text-lg opacity-90">{ronaldoStats.nationality} • {ronaldoStats.currentTeam}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{ronaldoStats.goals}</div>
                      <div className="text-sm opacity-80">Goals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">{ronaldoStats.ballonDor}</div>
                      <div className="text-sm opacity-80">Ballon d'Or</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 h-14 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="stats" className="text-lg">Statistics</TabsTrigger>
            <TabsTrigger value="achievements" className="text-lg">Achievements</TabsTrigger>
            <TabsTrigger value="comparison" className="text-lg">Head-to-Head</TabsTrigger>
            <TabsTrigger value="timeline" className="text-lg">Timeline</TabsTrigger>
          </TabsList>

          {/* Statistics Tab */}
          <TabsContent value="stats" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">Career Statistics</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Messi Stats */}
                <Card className={`${messiStats.colors.secondary} border-2`}>
                  <CardHeader>
                    <CardTitle className={`${messiStats.colors.accent} text-2xl flex items-center gap-3`}>
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${messiStats.colors.primary}`}></div>
                      {messiStats.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/70 rounded-lg">
                        <Target className="mx-auto mb-2 text-blue-600" size={24} />
                        <div className="text-2xl font-bold">{messiStats.goals}</div>
                        <div className="text-sm text-gray-600">Goals</div>
                      </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg">
                        <Users className="mx-auto mb-2 text-blue-600" size={24} />
                        <div className="text-2xl font-bold">{messiStats.assists}</div>
                        <div className="text-sm text-gray-600">Assists</div>
                      </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg">
                        <Trophy className="mx-auto mb-2 text-blue-600" size={24} />
                        <div className="text-2xl font-bold">{messiStats.trophies}</div>
                        <div className="text-sm text-gray-600">Trophies</div>
                      </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg">
                        <Star className="mx-auto mb-2 text-blue-600" size={24} />
                        <div className="text-2xl font-bold">{messiStats.ballonDor}</div>
                        <div className="text-sm text-gray-600">Ballon d'Or</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ronaldo Stats */}
                <Card className={`${ronaldoStats.colors.secondary} border-2`}>
                  <CardHeader>
                    <CardTitle className={`${ronaldoStats.colors.accent} text-2xl flex items-center gap-3`}>
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${ronaldoStats.colors.primary}`}></div>
                      {ronaldoStats.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/70 rounded-lg">
                        <Target className="mx-auto mb-2 text-green-600" size={24} />
                        <div className="text-2xl font-bold">{ronaldoStats.goals}</div>
                        <div className="text-sm text-gray-600">Goals</div>
                      </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg">
                        <Users className="mx-auto mb-2 text-green-600" size={24} />
                        <div className="text-2xl font-bold">{ronaldoStats.assists}</div>
                        <div className="text-sm text-gray-600">Assists</div>
                      </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg">
                        <Trophy className="mx-auto mb-2 text-green-600" size={24} />
                        <div className="text-2xl font-bold">{ronaldoStats.trophies}</div>
                        <div className="text-sm text-gray-600">Trophies</div>
                      </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg">
                        <Star className="mx-auto mb-2 text-green-600" size={24} />
                        <div className="text-2xl font-bold">{ronaldoStats.ballonDor}</div>
                        <div className="text-sm text-gray-600">Ballon d'Or</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">Major Achievements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Messi Achievements */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${messiStats.colors.primary}`}></div>
                    {messiStats.name}
                  </h3>
                  <div className="space-y-4">
                    {achievements.messi.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <Badge className="mt-1 bg-blue-100 text-blue-700 hover:bg-blue-100">
                                {achievement.year}
                              </Badge>
                              <div>
                                <h4 className="font-semibold text-lg">{achievement.title}</h4>
                                <p className="text-gray-600">{achievement.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Ronaldo Achievements */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-green-600 flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${ronaldoStats.colors.primary}`}></div>
                    {ronaldoStats.name}
                  </h3>
                  <div className="space-y-4">
                    {achievements.ronaldo.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <Badge className="mt-1 bg-green-100 text-green-700 hover:bg-green-100">
                                {achievement.year}
                              </Badge>
                              <div>
                                <h4 className="font-semibold text-lg">{achievement.title}</h4>
                                <p className="text-gray-600">{achievement.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Head-to-Head Comparison */}
          <TabsContent value="comparison" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">Head-to-Head Comparison</h2>
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Goals Comparison */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Career Goals</span>
                        <div className="flex gap-8">
                          <span className="text-blue-600 font-bold">{messiStats.goals}</span>
                          <span className="text-green-600 font-bold">{ronaldoStats.goals}</span>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={(messiStats.goals / ronaldoStats.goals) * 100} className="h-4" />
                        <div className="absolute top-0 right-0 w-full h-4 bg-green-200 rounded-full -z-10"></div>
                      </div>
                    </div>

                    {/* Assists Comparison */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Career Assists</span>
                        <div className="flex gap-8">
                          <span className="text-blue-600 font-bold">{messiStats.assists}</span>
                          <span className="text-green-600 font-bold">{ronaldoStats.assists}</span>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={(messiStats.assists / messiStats.assists) * 100} className="h-4" />
                        <div className="absolute top-0 right-0 w-full h-4 bg-green-200 rounded-full -z-10"></div>
                        <div className="absolute top-0 left-0 h-4 bg-green-500 rounded-full" 
                             style={{width: `${(ronaldoStats.assists / messiStats.assists) * 100}%`}}></div>
                      </div>
                    </div>

                    {/* Ballon d'Or Comparison */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Ballon d'Or Awards</span>
                        <div className="flex gap-8">
                          <span className="text-blue-600 font-bold">{messiStats.ballonDor}</span>
                          <span className="text-green-600 font-bold">{ronaldoStats.ballonDor}</span>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={(messiStats.ballonDor / messiStats.ballonDor) * 100} className="h-4" />
                        <div className="absolute top-0 right-0 w-full h-4 bg-green-200 rounded-full -z-10"></div>
                        <div className="absolute top-0 left-0 h-4 bg-green-500 rounded-full" 
                             style={{width: `${(ronaldoStats.ballonDor / messiStats.ballonDor) * 100}%`}}></div>
                      </div>
                    </div>

                    {/* Trophies Comparison */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Total Trophies</span>
                        <div className="flex gap-8">
                          <span className="text-blue-600 font-bold">{messiStats.trophies}</span>
                          <span className="text-green-600 font-bold">{ronaldoStats.trophies}</span>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={(messiStats.trophies / messiStats.trophies) * 100} className="h-4" />
                        <div className="absolute top-0 right-0 w-full h-4 bg-green-200 rounded-full -z-10"></div>
                        <div className="absolute top-0 left-0 h-4 bg-green-500 rounded-full" 
                             style={{width: `${(ronaldoStats.trophies / messiStats.trophies) * 100}%`}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">Career Timeline</h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>
                  
                  <div className="space-y-12">
                    {/* World Cup 2022 */}
                    <div className="relative">
                      <div className="flex items-center">
                        <div className="w-1/2 pr-8 text-right">
                          <Card className="bg-blue-50 border-blue-200">
                            <CardContent className="p-4">
                              <Badge className="bg-blue-100 text-blue-700 mb-2">2022</Badge>
                              <h3 className="font-bold text-lg">World Cup Winner</h3>
                              <p className="text-gray-600">Messi finally wins the World Cup with Argentina</p>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                        <div className="w-1/2 pl-8"></div>
                      </div>
                    </div>

                    {/* Euro 2016 */}
                    <div className="relative">
                      <div className="flex items-center">
                        <div className="w-1/2 pr-8"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                        <div className="w-1/2 pl-8">
                          <Card className="bg-green-50 border-green-200">
                            <CardContent className="p-4">
                              <Badge className="bg-green-100 text-green-700 mb-2">2016</Badge>
                              <h3 className="font-bold text-lg">Euro Champion</h3>
                              <p className="text-gray-600">Ronaldo leads Portugal to their first Euro victory</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>

                    {/* La Liga Dominance */}
                    <div className="relative">
                      <div className="flex items-center">
                        <div className="w-1/2 pr-8 text-right">
                          <Card className="bg-purple-50 border-purple-200">
                            <CardContent className="p-4">
                              <Badge className="bg-purple-100 text-purple-700 mb-2">2009-2018</Badge>
                              <h3 className="font-bold text-lg">El Clásico Era</h3>
                              <p className="text-gray-600">The golden era of Messi vs Ronaldo in La Liga</p>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                        <div className="w-1/2 pl-8"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">The GOAT Debate Continues</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Two legends, one generation. Both Messi and Ronaldo have redefined football excellence, 
            inspiring millions and setting records that may never be broken.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Badge variant="outline" className="text-blue-400 border-blue-400">Team Messi</Badge>
            <Badge variant="outline" className="text-green-400 border-green-400">Team Ronaldo</Badge>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;