const styles = (theme) => ({
  root: {
    width: '100%',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchInput: {
    borderBottom: '2px solid white',
    opacity: 0.5,
    '&:focus': {
      opacity: 1,
    },
    transition: theme.transitions.create('opacity'),
  },

  toolBarFlex: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'auto 1fr',
    gap: '10px',
  },
  toggleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

export default styles
