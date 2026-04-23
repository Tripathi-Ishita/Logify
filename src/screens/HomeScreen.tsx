import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Pressable,
    StyleSheet,

} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { darkTheme } from '../themes/theme';
//types of data
type LogEntry = {
    id: string;
    title: string;
    body: string;           // what you built / learned
    blocker: string;        // what blocked you
    mood: number;           // 0 to 4
    tags: string[];         // array of tag strings
    date: string;           // formatted date string for now
};
// MOCK DATA 
// Real data comes from AsyncStorage later
// For now, hardcode two entries so can see the UI

const MOCK_ENTRIES: LogEntry[] = [
    { id: '1', title: 'Built auth module', body: 'JWT login flow.', blocker: 'Token expiry.', mood: 4, tags: ['auth'], date: 'Today · 2:30 PM' },
    { id: '2', title: 'Fixed FlatList bug', body: 'onEndReached firing.', blocker: 'None', mood: 2, tags: ['RN'], date: 'Yesterday' },
    { id: '3', title: 'Set up navigation', body: 'Stack and tabs.', blocker: 'None', mood: 4, tags: ['nav'], date: 'Apr 18' },
    { id: '4', title: 'Theme system done', body: 'colors.ts and theme.ts.', blocker: 'None', mood: 4, tags: ['theme'], date: 'Apr 17' },
    { id: '5', title: 'AsyncStorage research', body: 'Read the docs.', blocker: 'Confusing API.', mood: 2, tags: ['storage'], date: 'Apr 16' },
    { id: '6', title: 'Bridging concept', body: 'Native modules study.', blocker: 'Kotlin syntax.', mood: 1, tags: ['bridge'], date: 'Apr 15' },
];

//Filter options
const FILTERS = ['ALL', 'This week', 'Blocked'];
//the three chips shown below
const HomeScreen = () => {
    const theme = darkTheme;

    //state:which filter chip is active?
    //intial value shoud be "All" since that chip is selected by default
    const [activeFilter, setActiveFilter] = useState('ALL');





    //render each mock entry card(a funtion)
    const renderEntry = ({ item }: { item: LogEntry }) => {
        const moodColor = theme.moods[item.mood];
        return (
            <View style={[styles.entryCard, { backgroundColor: theme.backgroundCard, borderColor: theme.border, }]}>
                <View style={styles.entryTop}>
                    <Text style={[styles.entryTitle, { color: theme.textPrimary }]}>
                        {item.title}
                    </Text>
                    <View style={[styles.moodDot, { backgroundColor: moodColor }]} />
                </View>
                <Text style={[styles.entryBody, { color: theme.textSecondary }]} numberOfLines={2}>
                    {item.body}
                </Text>
                {/* footer-date+tags */}
                <View style={styles.entryFooter}>
                    <Text style={[styles.entryDate, { color: theme.textPlaceholder }]}>
                        {item.date}
                    </Text>
                    <View style={styles.tagsRow}>
                        {
                            item.tags.map(
                                tag => (
                                    <View key={tag} style={[styles.tag, { backgroundColor: theme.backgroundElevated }]}>
                                        <Text style={[styles.tagText, { color: theme.textSecondary }]}>
                                            {tag}
                                        </Text>
                                    </View>
                                )
                            )
                        }
                    </View>
                </View>



            </View>
        );
    };

    return (
        //Main render of screen
        <SafeAreaView style={[styles.screen, { backgroundColor: theme.background }]}>
            {/* headder */}
            <View style={styles.header}>
                <View>
                    <Text style={[styles.greeting, { color: theme.textSecondary }]}>
                        Good Morning👋
                    </Text>
                    <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
                        My Logs
                    </Text>
                </View>
                {/* Avatar Circle */}
                <View style={[styles.avatar, { backgroundColor: theme.backgroundElevated, borderColor: theme.primary }]}>
                    <Text style={[styles.avatarText, { color: theme.textOnPrimary }]}>Y</Text>
                </View >

            </View >

            {/* Stat Cards*/}

            < View style={styles.statsRow} >
                <View style={[styles.statCard, { backgroundColor: theme.backgroundCard, borderColor: theme.border }]}>
                    <Text style={styles.statIcon}>📝</Text>
                    <Text style={[styles.statNum, { color: theme.textPrimary }]}>12</Text>
                    <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Total Logs</Text>
                </View>
                <View style={[styles.statCard, { backgroundColor: theme.backgroundCard, borderColor: theme.border }]}>
                    <Text style={styles.statIcon}>🔥</Text>
                    <Text style={[styles.statNum, { color: theme.textPrimary }]}>5</Text>
                    <Text style={[styles.statLabel, { color: theme.textSecondary }]}>This week</Text>
                </View>
                <View style={[styles.statCard, { backgroundColor: theme.backgroundCard, borderColor: theme.border }]}>
                    <Text style={styles.statIcon}>🚧</Text>
                    <Text style={[styles.statNum, { color: theme.textPrimary }]}>3</Text>
                    <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Blockers</Text>
                </View>
            </ View >


            {/* Filter Chips */}
            < View style={styles.filterRow} >
                {
                    FILTERS.map(
                        filter => {
                            const isActive = filter === activeFilter;
                            return (
                                <Pressable
                                    key={filter}
                                    onPress={() => setActiveFilter(filter)}
                                    style={[styles.chip, {
                                        backgroundColor: isActive ? theme.primary : theme.primaryLight,
                                        borderColor: isActive ? theme.primary : theme.border,
                                    }]}>
                                    <Text style={[styles.chipText, { color: isActive ? theme.textOnPrimary : theme.textSecondary }]}>
                                        {filter}
                                    </Text>
                                </Pressable>
                            )
                        }
                    )
                }
            </View >

            {/* Section label */}
            <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
                RECENT ENTRIES
            </Text>
            {/* Entry List */}
            <FlatList
                data={MOCK_ENTRIES}
                renderItem={renderEntry}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}

            />

            <Pressable style={[styles.fab, {
                backgroundColor: theme.primary,
                bottom: 28,
            }]}
                onPress={() => console.log("Hey")}>
                <MaterialIcons name='add' size={30} color={theme.textOnPrimary} />
            </Pressable>




        </SafeAreaView >
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 12,
    },
    greeting: {
        fontSize: 13
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: '700',
        marginTop: 2,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    avatarText: {
        fontSize: 16,
        fontWeight: '600'
    },
    statsRow: {
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 16,
        marginBottom: 16
    },
    statCard: {
        flex: 1,
        borderRadius: 12,
        padding: 12,
        borderWidth: 0.5

    },
    statIcon: {
        fontSize: 16,
        marginBottom: 4,
    },
    statNum: {
        fontSize: 20,
        fontWeight: '700'
    },
    statLabel: {
        fontSize: 10,
        marginTop: 2,
    },
    filterRow: {
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    chip: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 0.5
    },
    chipText: {
        fontSize: 12,
        fontWeight: '500'
    },
    sectionLabel: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        paddingBottom: 8,
        marginBottom: 5,
        fontSize: 11,
        fontWeight: '500',
        letterSpacing: 0.5,
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 100,
    },
    entryCard: {
        borderRadius: 12,
        padding: 14,
        marginBottom: 10,
        borderWidth: 0.5
    },
    entryTop: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    entryTitle: {
        fontSize: 14,
        fontWeight: '600',
        flex: 1,
        marginRight: 8
    },
    moodDot: {
        width: 22,
        height: 22,
        borderRadius: 11
    },
    entryBody: {
        fontSize: 12,
        lineHeight: 18,
        marginTop: 6,
        marginBottom: 10

    },
    entryFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    entryDate: {
        fontSize: 10,
    },
    tagsRow: {
        flexDirection: 'row',
        gap: 4,
    },
    tag: {
        borderRadius: 5,
        paddingVertical: 2,
        paddingHorizontal: 7,
    },
    tagText: {
        fontSize: 10
    },
    fab: {
        position: 'absolute',

        right: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6
    },

});
export default HomeScreen;
