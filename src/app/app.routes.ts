import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { PlayQuizComponent } from './pages/play-quiz/play-quiz.component';
import { QuizResultComponent } from './pages/quiz-result/quiz-result.component';
import { QuizHighscoresComponent } from './pages/quiz-highscores/quiz-highscores.component';
import { ColorGridComponent } from './pages/color-grid/color-grid.component';
import { ColorGridPlayComponent } from './pages/color-grid-play/color-grid-play.component';
import { ColorGridResultComponent } from './pages/color-grid-result/color-grid-result.component';
import { ColorGridHighscoresComponent } from './pages/color-grid-highscores/color-grid-highscores.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },

    { path: 'quiz', component: QuizComponent },
    { path: 'quiz/play', component: PlayQuizComponent },
    { path: 'quiz/result', component: QuizResultComponent },
    { path: 'quiz/highscores', component: QuizHighscoresComponent },
    
    { path: "colorgrid", component: ColorGridComponent },
    { path: 'colorgrid/play', component: ColorGridPlayComponent },
    { path: 'colorgrid/result', component: ColorGridResultComponent },
    { path: 'colorgrid/highscores', component: ColorGridHighscoresComponent },


    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "**", pathMatch: "full", redirectTo: "home" },
];
