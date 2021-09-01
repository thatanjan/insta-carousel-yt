import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import PostCard from './PostCard'

function App() {
	return (
		<div className='App'>
			<Grid container>
				<Grid
					item
					xs={12}
					style={{ height: '25vh', display: 'grid', placeItems: 'center' }}
				>
					<Typography variant='h3'>Insta Carousel</Typography>
				</Grid>

				<Grid item container xs={12} justifyContent='center'>
					<Grid item xs={3}>
						<PostCard />{' '}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default App
