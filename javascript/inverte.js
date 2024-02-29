function inverte(dado){
	switch(dado){
		case 'takeDouble':
			return 'doDouble';
		case 'doHalf':
			return 'takeHalf';
		default:
			return dado;
	};
}

export default inverte;
