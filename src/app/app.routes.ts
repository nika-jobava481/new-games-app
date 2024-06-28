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
import { SudokuComponent } from './pages/sudoku/sudoku.component';
import { SudokuPlayComponent } from './pages/sudoku-play/sudoku-play.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: 'quiz',
        children: [
            { path: '', component: QuizComponent },
            { path: 'play', component: PlayQuizComponent },
            { path: 'result', component: QuizResultComponent },
            { path: 'highscores', component: QuizHighscoresComponent }
        ]
    },
    {
        path: 'colorgrid',
        children: [
            { path: '', component: ColorGridComponent },
            { path: 'play', component: ColorGridPlayComponent },
            { path: 'result', component: ColorGridResultComponent },
            { path: 'highscores', component: ColorGridHighscoresComponent }
        ]
    },
    {
        path: "sudoku",
        children: [
            { path: '', component: SudokuComponent },
            { path: 'play', component: SudokuPlayComponent }
        ]
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "home"
    }
];

